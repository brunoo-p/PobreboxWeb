using System.Collections.Generic;
using Pobrebox.Model;

namespace Pobrebox.Interfaces
{
    public interface IDocument
    {
        bool AddDocument(Document doc);
        bool ExcludeDocument(int id);
        List<Document> GetDocumentForDirectory(int idUser, string directory);
        
    }
}