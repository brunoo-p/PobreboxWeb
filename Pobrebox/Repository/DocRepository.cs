using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Pobrebox.Interfaces;
using Pobrebox.Model;


namespace Pobrebox.Repository
{
    public class DocRepository : IDocument
    {
        private readonly Context _context;
        public DocRepository(Context context)
        {
            _context = context;
        }
        
        public async Task<bool> AddDocument(DocumentDTO doc)
        {
            try{
                var ms = new MemoryStream();
                doc.ImagePath.CopyTo(ms);
                var fileBytes = ms.ToArray();
                
                var newDocument = new Document(
                    idUser: doc.IdUser,
                    docName: (doc.DocName),
                    directory: doc.Directory.ToLower(),
                    content: fileBytes
                );
                
                await _context.Documents.AddAsync(newDocument);
                await _context.SaveChangesAsync();
                
                return true;
            }catch(Exception ex)
            {
                throw ex;
            }
        }


        public async Task<bool> ExcludeDocument(int id)
        {
                var doc = _context.Documents.FirstOrDefault(d => d.Id == id);
                
                if(doc == null){
                    return false;
                }

                doc.IsDeleted = true;
                await _context.SaveChangesAsync();

                return true;
        }

        public async Task<List<Document>> GetDocumentForDirectory(int idUser, string directory)
        {        
            try{
                
                return await _context.Documents.Where(d=> d.IdUser == idUser && d.Directory == directory)
                .Where(o => o.IsDeleted == false)
                .Select(doc => new Document (
                    doc.Id,
                    doc.IdUser,
                    doc.DocName,
                    doc.Directory,
                    doc.Content
                ))
                .ToListAsync();
                

            }catch
            {
                return null;
            }
        }
    }
}