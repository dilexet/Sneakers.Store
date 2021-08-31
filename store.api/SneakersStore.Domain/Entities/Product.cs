using System;

namespace SneakersStore.Domain.Entities
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ShortDescription { get; set; }
        public decimal Price { get; set; }
        public bool IsFavorite { get; set; }
        public int Available { get; set; }
        public Uri Image { get; set; }
        
        // public Guid CategoryId { get; set; }
        // public virtual Category Category { get; set; }
    }
}