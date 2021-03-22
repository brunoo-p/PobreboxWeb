

using System.ComponentModel.DataAnnotations;

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
        public bool IsDeleted { get; set; }
        [Required]
        public byte[] Content { get; set; }



        public Document( int id, int idUser, string docName, string directory, byte[] content)
        {
            Id = id;
            IdUser = idUser;
            DocName = docName;
            Directory = directory;
            Content = content;
        }
        public Document( int idUser, string docName, string directory, byte[] content, bool isDeleted)
        {
            IdUser = idUser;
            DocName = docName;
            Directory = directory;
            IsDeleted = isDeleted;
            Content = content;
        }
    }
}