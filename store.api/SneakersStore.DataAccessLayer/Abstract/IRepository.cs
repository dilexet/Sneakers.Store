using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SneakersStore.DataAccessLayer.Abstract
{
    public interface IRepository
    {
        IEnumerable<TEntity> Get<TEntity>(Expression<Func<TEntity, bool>> predicate = null) where TEntity : class;

        Task<TEntity> SingleOrDefault<TEntity>(Expression<Func<TEntity, bool>> predicate) where TEntity : class;

        Task<TEntity> Find<TEntity>(Guid? id) where TEntity : class;

        void Add<TEntity>(TEntity entity) where TEntity : class;
        void Update<TEntity>(TEntity entity) where TEntity : class;

        void Remove<TEntity>(TEntity entity) where TEntity : class;
        void RemoveRange<TEntity>(IEnumerable<TEntity> entity) where TEntity : class;

        void Save();
    }
}