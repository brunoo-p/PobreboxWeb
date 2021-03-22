using System.Collections.Generic;
using System.Threading.Tasks;
using Pobrebox.Model;

namespace Pobrebox.Interfaces
{
    public interface IDocument
    {
        Task<bool> AddDocument(Document doc);
        Task<bool> ExcludeDocument(int id);
        Task<List<Document>> GetDocumentForDirectory(int idUser, string directory);
        
    }
}