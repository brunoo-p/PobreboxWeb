using System.Collections.Generic;

namespace Pobrebox.Model
{
    public class User : Base
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<Document> Documents { get; set; }

        public User(int id, string name, string email, string password)
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
        }

        public User(string name, string email, string password)
        {
            Name = name;
            Email = email;
            Password = password;
        }
        
        public string RetornaNome() => Name;
        public string RetornaEmail() => Email;
        public string RetornaPassword() => Password;
    }
}