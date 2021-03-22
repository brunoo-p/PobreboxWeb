using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
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
        
        public async Task<bool> AddDocument(Document doc)
        {
            try{

                await _context.Documents.AddAsync(doc);
                await _context.SaveChangesAsync();
                
                return true;
            }catch(Exception)
            {
                return false;
            }
        }


        public async Task<bool> ExcludeDocument(int idUser)
        {
            try{
                var doc = _context.Documents.FirstOrDefault(d => d.IdUser == idUser);
                
                if(doc == null){
                    return false;
                }

                doc.IsDeleted = true;
                await _context.SaveChangesAsync();

                return true;
            }catch(Exception){
                return false;
            }
        }


        private IQueryable<Document> GetIdUser(int idUser) =>
            from d in _context.Documents.AsNoTracking()
                    where d.IdUser == idUser
                    select d;

        public async Task<List<Document>> GetDocumentForDirectory(int idUser, string directory)
        {            
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
        }
    }
}