using SneakersStore.DataAccessLayer.AppContext;

namespace SneakersStore.DataAccessLayer.Abstract
{
    public interface IContextFactory
    {
        StoreDbContext CreateDbContext(string connectionString);
    }
}