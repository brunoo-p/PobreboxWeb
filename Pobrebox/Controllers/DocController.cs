using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Pobrebox.Model;
using Pobrebox.Repository;

namespace Pobrebox.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocController : Controller
    {
        private readonly DocRepository repository;

        [HttpPost]
        public bool AddDocument(Document doc)
        {
            try{

                var document = repository.AddDocument(doc);
                if(!document){
                    return false;
                }

                return document;

            }catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpDelete]
        public bool ExcludeDocument(int id)
        {
            try{
                var documentExcluded = repository.ExcludeDocument(id);
                if(!documentExcluded)
                {
                    return false;
                }

                return true;

            }catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Document>>> GetDocumentForDirectory(int idUser, string directory)
        {
            try{
                var documents = repository.GetDocumentForDirectory(idUser, directory);
                if(documents.Equals(null))
                {
                    return BadRequest(null);
                }
                return Ok(documents.ToList());
            }catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}