using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace Pobrebox.Model
{
    public class DocumentDTO : Base
    {
        [Required]
        public int IdUser { get; set; }
        [Required]
        public string DocName { get; set; }
        [Required]
        public string Directory { get; set; }
        public bool IsDeleted { get; set; } = false;
        public string Content { get; set; }

        [NotMapped]
        public IFormFile ImagePath { get; set; }

        public DocumentDTO( int id, int idUser, string docName, string directory, string content)
        {
            Id = id;
            IdUser = idUser;
            DocName = docName;
            Directory = directory;
            Content = content;
        }

        public DocumentDTO(){}
    }
}