using SneakersStore.DataAccessLayer.Abstract;

namespace SneakersStore.DataAccessLayer.DbRepository
{
    public class BaseRepository
    {
        protected string ConnectionString { get; }
        protected IContextFactory ContextFactory { get; }

        public BaseRepository(string connectionString, IContextFactory contextFactory)
        {
            ConnectionString = connectionString;
            ContextFactory = contextFactory;
        }
    }
}