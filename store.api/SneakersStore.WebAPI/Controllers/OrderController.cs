using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SneakersStore.DataAccessLayer.Abstract;
using SneakersStore.DataAccessLayer.Utils;
using SneakersStore.Domain.Entities;

namespace SneakersStore.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IRepository _repository;
        private readonly Cart _cart;
        private readonly ILogger<OrderController> _logger;

        public OrderController(ILogger<OrderController> logger, IRepository repository, Cart cart)
        {
            _logger = logger;
            _repository = repository;
            _cart = cart;
        }

        // public IActionResult Complete()
        // {
        //     ViewBag.Message = "Заказ обработан";
        //     return View();
        // }
        
        [HttpPost("{cartId}")]
        public JsonResult Checkout(Guid cartId, OrderForm orderForm)
        {
            try
            {
                orderForm.OrderTime = DateTime.Now;

                var items = _cart.GetShopItems(cartId).ToList();

                _repository.Add(orderForm);

                // TODO: if(valid) => return RedirectToAction("Complete");
                // TODO: else => return(orderForm)
            
                foreach (var item in items)
                {
                    var orderDetail = new OrderDetail
                    {
                        Product = item.Product,
                        OrderForm = orderForm,
                        Price = item.CountProducts * item.Product.Price
                    };
                    _repository.Add(orderDetail);
                }
                _repository.RemoveRange(items);
                _repository.Save();
            }
            catch (Exception e)
            {
                _logger.LogError(e.ToString());
            }

            return new JsonResult("Complete");
        }
    }
}