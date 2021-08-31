using System.IO;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using SneakersStore.DataAccessLayer.AppContext;
using SneakersStore.DataAccessLayer.Factory;

namespace SneakersStore.WebAPI.Factory
{
    public class DesignTimeRepositoryContextFactory :
        IDesignTimeDbContextFactory<StoreDbContext>
    {
        public StoreDbContext CreateDbContext(string[] args)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            var config = builder.Build();
            var connectionString = config.GetConnectionString("StoreConnectionString");
            var repositoryFactory = new StoreContextFactory();

            return repositoryFactory.CreateDbContext(connectionString);
        }
    }
}