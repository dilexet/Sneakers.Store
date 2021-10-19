using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SneakersStore.Domain.Entities;
using SneakersStore.Domain.ViewModel;
using SneakersStore.WebAPI.Services;

namespace SneakersStore.WebAPI.Controllers
{
    // add dto
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly JwtService _jwtService;

        public AuthenticateController(UserManager<ApplicationUser> userManager, 
            RoleManager<IdentityRole> roleManager,
            JwtService jwtService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _jwtService = jwtService;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var count = _userManager.Users.Count();
            var userExists = await _userManager.FindByNameAsync(model.UserName);

            if (userExists != null)
            {
                return new JsonResult(new Response { Status = "Error", Message = "User already exists!" });
            }

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName,
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!await _roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await _roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            }

            if (!await _roleManager.RoleExistsAsync(UserRoles.User))
            {
                await _roleManager.CreateAsync(new IdentityRole(UserRoles.User));
            }

            if (count == 0)
            {
                if (await _roleManager.RoleExistsAsync(UserRoles.Admin))
                {
                    await _userManager.AddToRoleAsync(user, UserRoles.Admin);
                }
            }
            else
            {
                if (await _roleManager.RoleExistsAsync(UserRoles.User))
                {
                    await _userManager.AddToRoleAsync(user, UserRoles.User);
                }
            }

            if (!result.Succeeded)
            {
                return new JsonResult(new Response
                    { Status = "Error", Message = "User creation failed! Please check user details and try again." });
            }

            return new JsonResult(new Response { Status = "Success", Message = "User created successfully!" });
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);

            if (user == null)
            {
                return new JsonResult(new Response
                {
                    Status = "Error", Message = "User is not found"
                });
            }

            if (!await _userManager.CheckPasswordAsync(user, model.Password))
            {
                return new JsonResult(new Response
                {
                    Status = "Error", Message = "Login or password is invalid"
                });
            }

            await _userManager.GetRolesAsync(user);

            var token = _jwtService.Generate(user.Id);

            HttpContext.Response.Cookies.Append("SneakersStoreCookies", token, new CookieOptions
            {
                HttpOnly = true,
                SameSite = SameSiteMode.None,
                Secure = true,
                Expires = DateTime.Today.AddDays(3),
            });
            return new JsonResult(new Response
            {
                Status = "ok", Message = "success"
            });
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            var jwt = Request.Cookies["SneakersStoreCookies"];
            if (jwt != null)
            {
                Response.Cookies.Append("SneakersStoreCookies", jwt, new CookieOptions
                {
                    HttpOnly = true,
                    SameSite = SameSiteMode.None,
                    Secure = true,
                    Expires = DateTime.Now.AddYears(-1),
                });
            }
            // Response.Cookies.Delete(cookieName);

            return new JsonResult(new Response
            {
                Status = "ok", Message = "success"
            });
        }

        [HttpGet("getUser")]
        public async Task<IActionResult> GetUser()
        {
            try
            {
                var jwt = Request.Cookies["SneakersStoreCookies"];

                var token = _jwtService.Verify(jwt);

                var userId = token.Issuer;

                var user = await _userManager.FindByIdAsync(userId);
                var userRoles = await _userManager.GetRolesAsync(user);

                // TODO: mapper
                var viewUser = new User
                {
                    Name = user.UserName,
                    Roles = userRoles,
                };

                return new JsonResult(new Response
                {
                    Status = "ok", Message = "success", Result = viewUser.Name
                });
            }
            catch (Exception)
            {
                return new JsonResult(new Response
                {
                    Status = "error", Message = "User is not authorize"
                });
            }
        }
    }
}