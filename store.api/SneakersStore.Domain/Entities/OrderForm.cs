using System;
using System.Collections.Generic;

namespace SneakersStore.Domain.Entities
{
    // TODO: когда будет авторизация, здесь хранить пользователя
    public class OrderForm
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public DateTime OrderTime { get; set; }
        public IEnumerable<OrderDetail> Orders { get; set; }
    }
}