using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Pobrebox.Model
{
    public class User : Base
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public ICollection<Document> Documents { get; set; }

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