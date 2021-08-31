using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.CookiePolicy;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using SneakersStore.DataAccessLayer.Abstract;
using SneakersStore.DataAccessLayer.AppContext;
using SneakersStore.DataAccessLayer.DbRepository;
using SneakersStore.DataAccessLayer.Factory;
using SneakersStore.DataAccessLayer.Utils;
using SneakersStore.Domain.Entities;
using SneakersStore.WebAPI.Services;

namespace SneakersStore.WebAPI
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        private const string NamePolicy = "StoreCors";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration.GetConnectionString("StoreConnectionString");
            var hostHttp = Configuration.GetSection("ClientHTTP").Value;
            // var hostHttps = Configuration.GetSection("ClientHTTPS").Value;

            // Cors
            AppServiceBuilder.CorsSettings(services, NamePolicy, hostHttp);

            services.AddControllers().AddNewtonsoftJson(options =>
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver
                    = new DefaultContractResolver());

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IContextFactory, StoreContextFactory>();
            services.AddScoped<JwtService>();
            services.AddDbContext<StoreDbContext>(p => { p.UseSqlServer(connectionString); });

            services.AddScoped<IRepository>(provider =>
                new GenericRepository(
                    provider.GetService<ILogger<GenericRepository>>(),
                    connectionString,
                    provider.GetService<IContextFactory>()));


            services.AddScoped(Cart.GetCart);

            services.AddMemoryCache();
            services.AddDistributedMemoryCache();

            services.AddSession();
            services.AddAuthentication();
            services.AddAuthorization();
            // services.AddSession(options =>
            // {
            //     options.Cookie.Name = "SneakersStoreSession";
            //     options.Cookie.IsEssential = true;
            //     options.Cookie.HttpOnly = true;
            //     options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
            //     options.Cookie.SameSite = SameSiteMode.Strict;
            // });

            // Identity
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<StoreDbContext>()
                .AddDefaultTokenProviders();
            services.Configure<SecurityStampValidatorOptions>(options =>
            {
                options.ValidationInterval = TimeSpan.FromMinutes(10);
            });


            // Token
            // AppServiceBuilder.JwtTokenSettings(services, Configuration);

            // Swagger
            AppServiceBuilder.SwaggerSettings(services);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(NamePolicy);
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SneakersStore.WebAPI v1"));
            }

            app.UseHttpsRedirection();
            app.UseStatusCodePages();
            app.UseStaticFiles();
            app.UseSession();
            app.UseRouting();
            
            app.Use(async (context, next) =>
            {
                var token = context.Request.Cookies["SneakersStoreCookies"];
                if (!string.IsNullOrEmpty(token))
                    context.Request.Headers.Add("Authorization", "Bearer " + token);
 
                await next();
            });
            app.UseAuthentication();

            app.UseCookiePolicy(new CookiePolicyOptions
            {
                MinimumSameSitePolicy = SameSiteMode.None,
                HttpOnly = HttpOnlyPolicy.Always,
                Secure = CookieSecurePolicy.Always
            });

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}