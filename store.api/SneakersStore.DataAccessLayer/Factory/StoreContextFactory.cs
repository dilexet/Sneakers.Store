using Microsoft.EntityFrameworkCore;
using SneakersStore.DataAccessLayer.Abstract;
using SneakersStore.DataAccessLayer.AppContext;

namespace SneakersStore.DataAccessLayer.Factory
{
    public class StoreContextFactory : IContextFactory
    {
        public StoreDbContext CreateDbContext(string connectionString)
        {
            var optionsBuilder = new DbContextOptionsBuilder<StoreDbContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new StoreDbContext(optionsBuilder.Options);
        }
    }
}