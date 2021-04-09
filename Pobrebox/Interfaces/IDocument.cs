using System.Collections.Generic;
using System.Threading.Tasks;
using Pobrebox.Model;
using static Pobrebox.Model.Document;

namespace Pobrebox.Interfaces
{
    public interface IDocument
    {
        Task<bool> AddDocument(DocumentDTO doc);
        Task<bool> ExcludeDocument(int id);
        Task<List<Document>> GetDocumentForDirectory(int idUser, string directory);
        
    }
}