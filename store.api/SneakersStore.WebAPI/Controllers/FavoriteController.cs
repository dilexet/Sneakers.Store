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
    public class FavoriteController : ControllerBase
    {
        private readonly IRepository _repository;
        private readonly SessionService _sessionService;
        private readonly ILogger<FavoriteController> _logger;

        public FavoriteController(ILogger<FavoriteController> logger, IRepository repository,
            SessionService sessionService)
        {
            _logger = logger;
            _repository = repository;
            _sessionService = sessionService;
        }

        [HttpGet]
        public JsonResult GetFavoriteItems(Guid cartId)
        {
            var items = _sessionService.GetFavoriteItems(cartId).ToList();
            _sessionService.ListFavoriteItems = items.ToList();

            var obj = new FavoriteViewModel()
                { CartId = _sessionService.CartId, FavoriteItems = _sessionService.ListFavoriteItems };
            return new JsonResult(obj);
        }
        
        [HttpPost]
        public async Task<ActionResult> AddToFavorite(Guid id, Guid cartId)
        {
            var product = await _repository.SingleOrDefault<Product>(i => i.Id == id);

            if (product == null)
            {
                _logger.LogError("ERROR: Product did not successfully add to cart");
                return NotFound();
            }

            var cartItem = _sessionService.AddToFavorite(product, cartId);

            return new JsonResult(cartItem);
        }

        [HttpDelete("{id}")]
        public JsonResult RemoveFromFavorite(Guid id, Guid cartId)
        {
            try
            {
                var entity = _repository.SingleOrDefault<FavoriteItem>(x => x.ProductId == id && x.CartId == cartId).Result;
                if (entity == null)
                {
                    throw new NullReferenceException("Product not found");
                }

                _repository.Remove(entity);
            }
            catch (Exception)
            {
                _logger.LogError("Remove error");
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}