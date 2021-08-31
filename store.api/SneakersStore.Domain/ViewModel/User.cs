using System.Collections.Generic;

namespace SneakersStore.Domain.ViewModel
{
    public class User
    {
        public string Name { get; set; }
        public IEnumerable<string> Roles { get; set; }
    }
}