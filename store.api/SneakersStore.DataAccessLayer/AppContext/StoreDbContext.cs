using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SneakersStore.Domain.Entities;

namespace SneakersStore.DataAccessLayer.AppContext
{
    public class StoreDbContext : IdentityDbContext<ApplicationUser>
    {
        public StoreDbContext()
        {
            
        }
        
        public StoreDbContext(DbContextOptions<StoreDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<OrderForm> OrderForms { get; set; }

        // public DbSet<Category> Categories { get; set; }
        //
        // public DbSet<Phone> Phones { get; set; }
        // public DbSet<Specifications> Specifications { get; set; }
        // public DbSet<Battery> Batteries { get; set; }
        // public DbSet<Cpu> Cpus { get; set; }
        // public DbSet<OperatingSystem> OperatingSystems { get; set; }
        // public DbSet<Screen> Screens { get; set; }
    }
}