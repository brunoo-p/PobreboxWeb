

namespace Pobrebox.Model
{
    public class Document : Base
    {
        public int IdUser { get; set; }
        public string DocName { get; set; }
        public string Directory { get; set; }
        public bool IsDeleted { get; set; }
        public string Content { get; set; }



        public Document( int id, int idUser, string docName, string directory, string content)
        {
            Id = id;
            IdUser = idUser;
            DocName = docName;
            Directory = directory;
            Content = content;
        }
        public Document( int idUser, string docName, string directory, string content, bool isDeleted)
        {
            //Id = id;
            IdUser = idUser;
            DocName = docName;
            Directory = directory;
            IsDeleted = isDeleted;
            Content = content;
        }
    }
}