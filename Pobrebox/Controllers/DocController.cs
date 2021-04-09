using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Pobrebox.Interfaces;
using Pobrebox.Model;

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
        public async Task<ActionResult> AddDocument([FromForm] DocumentDTO doc)
        {
            if(doc.ImagePath == null)
            {
                return StatusCode(406, "Primeiro escolha um arquivo.");
            }
            try{
                var docs = await repository.AddDocument(doc);

                if(!docs){
                    return BadRequest("Erro ao tentar adicionar o documento");
                }

                return Ok("Documento adicionado com sucesso!");
            }catch(Exception ex)
            {
                throw ex;
            }
                 
        }

        [HttpDelete("{id}")]
        public async Task<bool> ExcludeDocument(int id)
        {
                var documentExcluded = await repository.ExcludeDocument(id);
                
                if(!documentExcluded)
                {
                    return false;
                }

                return documentExcluded;
        }

        [HttpGet("{idUser}/{directory}")]
        public async Task<ActionResult<List<Document>>> GetDocumentForDirectory(int idUser, string directory)
        {
            try{
                List<Document> documents = await repository.GetDocumentForDirectory(idUser, directory);
                
                
                if(documents.Equals(null))
                {
                    return StatusCode(501, "Erro no Servidor ao buscar imagens.");
                }
                if(documents.Count.Equals(0))
                {
                    return StatusCode(203, "Nenhum arquivo encontrado.");
                }
                
                return Ok(documents);
            }catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}