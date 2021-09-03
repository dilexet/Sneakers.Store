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
    public class SessionService
    {
        private readonly IRepository _repository;

        public SessionService(IRepository repository)
        {
            _repository = repository;
        }

        public Guid CartId { get; set; }

        public IEnumerable<CartItem> ListShopItems { get; set; }
        public IEnumerable<FavoriteItem> ListFavoriteItems { get; set; }

        public static SessionService GetCart(IServiceProvider services)
        {
            ISession session = services.GetRequiredService<IHttpContextAccessor>()?.HttpContext.Session;

            var repository = services.GetService<IRepository>();
            var cartId = session.GetString("CartIdServer") ?? Guid.NewGuid().ToString();

            session.SetString("CartIdServer", cartId);

            return new SessionService(repository) { CartId = new Guid(cartId) };
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

        public FavoriteItem AddToFavorite(Product product, Guid cartId)
        {
            if (cartId != Guid.Empty)
            {
                CartId = cartId;
            }

            var favoriteItem = new FavoriteItem()
            {
                CartId = cartId,
                Product = product
            };

            _repository.Add(favoriteItem);
            _repository.Save();
            return favoriteItem;
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

        public IEnumerable<FavoriteItem> GetFavoriteItems(Guid cartId)
        {
            if (cartId != Guid.Empty)
            {
                CartId = cartId;
            }

            var data = _repository.Get<FavoriteItem>().AsQueryable().Where(c => c.CartId == CartId)
                .Include(s => s.Product);
            return data.ToList();
        }
    }
}