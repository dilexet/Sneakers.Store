using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SneakersStore.DataAccessLayer.Abstract;
using SneakersStore.Domain.Entities;

namespace SneakersStore.DataAccessLayer.Utils
{
    public class Cart
    {
        private readonly IRepository _repository;

        public Cart(IRepository repository)
        {
            _repository = repository;
        }

        public Guid CartId { get; set; }

        public IEnumerable<CartItem> ListShopItems { get; set; }

        public static Cart GetCart(IServiceProvider services)
        {
            ISession session = services.GetRequiredService<IHttpContextAccessor>()?.HttpContext.Session;

            var repository = services.GetService<IRepository>();
            var cartId = session.GetString("CartIdServer") ?? Guid.NewGuid().ToString();

            session.SetString("CartIdServer", cartId);

            return new Cart(repository) { CartId = new Guid(cartId) };
        }

        // TODO: можно разбить на 2 метода
        public CartItem AddToCart(Product product, Guid cartId)
        {
            if (cartId != Guid.Empty)
            {
                CartId = cartId;
            }

            var existingProduct =
                _repository.SingleOrDefault<CartItem>(item => item.CartId == cartId && item.ProductId == product.Id)
                    .Result;

            if (existingProduct == null)
            {
                var cartItem = new CartItem
                {
                    CartId = cartId,
                    CountProducts = 1,
                    Product = product
                };

                _repository.Add(cartItem);
                _repository.Save();
                return cartItem;
            }

            existingProduct.CountProducts++;
            _repository.Update(existingProduct);

            return existingProduct;
        }

        public IEnumerable<CartItem> GetShopItems(Guid cartId)
        {
            if (cartId != Guid.Empty)
            {
                CartId = cartId;
            }

            var data = _repository.Get<CartItem>().AsQueryable().Where(c => c.CartId == CartId)
                .Include(s => s.Product);
            return data.ToList();
        }
    }
}