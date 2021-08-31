using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SneakersStore.DataAccessLayer.Abstract;
using SneakersStore.Domain.Entities;

namespace SneakersStore.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogController : ControllerBase
    {
        private readonly IRepository _repository;
        private readonly IWebHostEnvironment _env;
        private readonly ILogger<CatalogController> _logger;

        public CatalogController(ILogger<CatalogController> logger, IRepository repository, IWebHostEnvironment env)
        {
            _logger = logger;
            _repository = repository;
            _env = env;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts(string sortBy, string searchQuery)
        {
            var data = _repository.Get<Product>();
            if (!string.IsNullOrEmpty(searchQuery))
            {
                data = data.Where(obj =>
                    obj.Name.ToLower().IndexOf(searchQuery.ToLower(), StringComparison.Ordinal) >= 0 ||
                    obj.ShortDescription.ToLower().IndexOf(searchQuery.ToLower(), StringComparison.Ordinal) >= 0
                );
            }

            switch (sortBy)
            {
                case "all":
                    return new JsonResult(data.ToList());
                case "name":
                    return new JsonResult(data.OrderBy(p => p.Name).ToList());
                case "price_high":
                    return new JsonResult(data.OrderByDescending(p => p.Price).ToList());
                case "price_low":
                    return new JsonResult(data.OrderBy(p => p.Price).ToList());
                default:
                    return new JsonResult(data);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {
            var product = await _repository.Find<Product>(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPost]
        public ActionResult<Product> CreateProduct(Product product)
        {
            _repository.Add(product);
            _repository.Save();
            return CreatedAtAction("GetProduct", new { name = product.Name, id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public JsonResult UpdateProduct(Guid id, Product product)
        {
            // var productBeforeUpdate = _repository.Find<Product>(product.Id)
            // if (id != product.Id)
            // {
            //     return new JsonResult("Error: indexes are different");
            // }

            product.Id = id;

            _repository.Update(product);
            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult DeleteProduct(Guid id)
        {
            var entity = _repository.Find<Product>(id).Result;
            _repository.Remove(entity);
            return new JsonResult("Deleted Successfully");
        }

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("anonymous.png");
            }
        }
    }
}