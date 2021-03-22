using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Pobrebox.Interfaces;
using Pobrebox.Model;
using Pobrebox.Repository;

namespace Pobrebox.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DocController : ControllerBase
    {
        IDocument repository;
        public DocController(IDocument _repository)
        {
            repository = _repository;
        }

        [HttpPost]
        public async Task<bool> AddDocument(Document doc)
        {
            try{

                var newDoc = new Document(
                    doc.Id,
                    doc.IdUser,
                    doc.DocName,
                    doc.Directory,
                    doc.Content
                );
                
                
                var document = await repository.AddDocument(newDoc);
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
        public async Task<bool> ExcludeDocument(int id)
        {
            try{
                var documentExcluded = await repository.ExcludeDocument(id);
                
                if(!documentExcluded)
                {
                    return false;
                }

                return documentExcluded;

            }catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        public async Task<ActionResult<List<Document>>> GetDocumentForDirectory(int idUser, string directory)
        {
            try{
                var documents = await repository.GetDocumentForDirectory(idUser, directory);
                
                
                if(documents.Equals(null))
                {
                    return BadRequest(null);
                }
                
                return Ok(documents);
            }catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}