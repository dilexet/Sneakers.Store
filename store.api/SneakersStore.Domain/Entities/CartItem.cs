using System;

namespace SneakersStore.Domain.Entities
{
    public class CartItem
    {
        public Guid Id { get; set; }
        public Guid CartId { get; set; }
        public Guid ProductId { get; set; }
        
        public uint CountProducts { get; set; }
        public virtual Product Product { get; set; }
    }
}