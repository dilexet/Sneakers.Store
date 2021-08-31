using System;

namespace SneakersStore.Domain.Entities
{
    public class OrderDetail
    {
        public Guid Id { get; set; }
        public Guid OrderFormId { get; set; }
        public Guid ProductId { get; set; }
        public decimal Price { get; set; }
        public virtual Product Product { get; set; }
        public virtual OrderForm OrderForm { get; set; }
    }
}