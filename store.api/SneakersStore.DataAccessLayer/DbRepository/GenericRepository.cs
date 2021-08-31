using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SneakersStore.DataAccessLayer.Abstract;
using SneakersStore.DataAccessLayer.AppContext;

namespace SneakersStore.DataAccessLayer.DbRepository
{
    public class GenericRepository : BaseRepository, IRepository
    {
        private StoreDbContext Context { get; }
        private ILogger<GenericRepository> Logger { get; }

        public GenericRepository(ILogger<GenericRepository> logger, string connectionString,
            IContextFactory contextFactory)
            : base(connectionString, contextFactory)
        {
            Context = contextFactory.CreateDbContext(connectionString);
            Logger = logger;
        }

        public IEnumerable<TEntity> Get<TEntity>(Expression<Func<TEntity, bool>> predicate)
            where TEntity : class
        {
            if (predicate != null)
            {
                return Context.Set<TEntity>().Where(predicate);
            }

            return Context.Set<TEntity>();
        }

        public async Task<TEntity> SingleOrDefault<TEntity>(Expression<Func<TEntity, bool>> predicate)
            where TEntity : class
        {
            return await Context.Set<TEntity>().Where(predicate).SingleOrDefaultAsync();
        }

        public async Task<TEntity> Find<TEntity>(Guid? id) where TEntity : class
        {
            return await Context.Set<TEntity>().FindAsync(id);
        }

        public void Add<TEntity>(TEntity entity) where TEntity : class
        {
            if (entity == null)
            {
                Logger.LogError("Attempt to add invalid data");
                return;
            }

            Context.Set<TEntity>().AddAsync(entity);
            // Context.SaveChangesAsync();
        }

        public async void Update<TEntity>(TEntity entity) where TEntity : class
        {
            if (entity == null)
            {
                Logger.LogError("Attempt to add invalid data");
                return;
            }

            // Context.Set<TEntity>().Update(entity);
            Context.Entry(entity).State = EntityState.Modified;
            try
            {
                await Context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                // ReSharper disable once TemplateIsNotCompileTimeConstantProblem
                Logger.LogError(ex.ToString());
            }
        }

        public async void Remove<TEntity>(TEntity entity) where TEntity : class
        {
            if (entity == null)
            {
                Logger.LogError("Attempt to remove invalid data");
                return;
            }

            Context.Set<TEntity>().Remove(entity);
            await Context.SaveChangesAsync();
        }
        
        public void RemoveRange<TEntity>(IEnumerable<TEntity> entity) where TEntity : class
        {
            if (entity == null)
            {
                Logger.LogError("Attempt to remove invalid data");
                return;
            }

            Context.Set<TEntity>().RemoveRange(entity);
        }

        public async void Save()
        {
            await Context.SaveChangesAsync();
        }
    }
}