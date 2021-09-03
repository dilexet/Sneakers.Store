using System;
using System.Collections.Generic;
using SneakersStore.Domain.Entities;

namespace SneakersStore.Domain.ViewModel
{
    public class FavoriteViewModel
    {
        public Guid CartId { get; set; }
        public IEnumerable<FavoriteItem> FavoriteItems { get; set; }
    }
}