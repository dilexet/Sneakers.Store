using System;
using System.Collections.Generic;
using System.Linq;
using SneakersStore.Domain.Entities;

namespace SneakersStore.Domain.ViewModel
{
    public class CartViewModel
    {
        public Guid CartId { get; set; }
        public decimal TotalPrice
        {
            get
            {
                return CartItems.Sum(item =>
                {
                    var count = item.CountProducts > 0 ? item.CountProducts : 1; // TODO: на всякие случай, но потом лучше убрать
                    return count * item.Product.Price;
                });
            }
        }

        public IEnumerable<CartItem> CartItems { get; set; }
    }
}