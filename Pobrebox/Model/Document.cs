

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace Pobrebox.Model
{
    public class Document : Base
    {
        [Required]
        public int IdUser { get; set; }
        
        [Required]
        public string DocName { get; set; }
        
        [Required]
        public string Directory { get; set; }
        public bool IsDeleted { get; set; } = false;
        
        [Required]
        public byte[] Content { get; set; }

        [NotMapped]
        public IFormFile ImagePath { get; set; }
        
        //recupera document
        public Document( int id, int idUser, string docName, string directory, byte[] content)
        {
            Id = id;
            IdUser = idUser;
            DocName = docName;
            Directory = directory;
            Content = content;
        }
         public Document( int idUser, string docName, string directory, byte[] content)
        {
            IdUser = idUser;
            DocName = docName;
            Directory = directory;
            Content = content;
        }
    }
}