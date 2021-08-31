using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SneakersStore.DataAccessLayer.Abstract;
using SneakersStore.DataAccessLayer.Utils;
using SneakersStore.Domain.Entities;
using SneakersStore.Domain.ViewModel;

namespace SneakersStore.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly IRepository _repository;
        private readonly Cart _cart;
        private readonly ILogger<CartController> _logger;

        public CartController(ILogger<CartController> logger, IRepository repository, Cart cart)
        {
            _logger = logger;
            _repository = repository;
            _cart = cart;
        }

        [HttpGet]
        public JsonResult GetCart(Guid cartId)
        {
            var items = _cart.GetShopItems(cartId).ToList();
            _cart.ListShopItems = items.ToList();

            var obj = new CartViewModel { CartId = _cart.CartId, CartItems = _cart.ListShopItems };
            return new JsonResult(obj);
        }

        [HttpPost]
        public async Task<ActionResult> AddToCart(Guid id, Guid cartId)
        {
            var product = await _repository.SingleOrDefault<Product>(i => i.Id == id);

            if (product == null)
            {
                _logger.LogError("ERROR: Product did not successfully add to cart");
                return NotFound();
                // return CreatedAtAction("GetCart", null, item);
            }

            var cartItem = _cart.AddToCart(product, cartId);

            return new JsonResult(cartItem);
        }

        // принимать парметром CartItem
        [HttpPut]
        public async Task<ActionResult> UpdateCountProducts(Guid id, Guid cartId)
        {
            var product = await _repository.SingleOrDefault<Product>(i => i.Id == id);

            if (product == null)
            {
                _logger.LogError("ERROR: Product did not successfully add to cart");
                return NotFound();
                // return CreatedAtAction("GetCart", null, item);
            }

            var cartItem = _cart.AddToCart(product, cartId);


            // _repository.Update(product);

            return new JsonResult(cartItem);
        }
        
        [HttpDelete("{id}")]
        public JsonResult RemoveFromCart(Guid id, Guid cartId)
        {
            try
            {
                var entity = _repository.SingleOrDefault<CartItem>(x => x.Id == id && x.CartId == cartId).Result;
                if (entity == null)
                {
                    throw new NullReferenceException("Product not found");
                }
                else if (entity.CountProducts <= 1)
                {
                    _repository.Remove(entity);
                }
                else
                {
                    entity.CountProducts--;
                    _repository.Update(entity);
                }
            }
            catch (Exception)
            {
                _logger.LogError("Remove error");
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}