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
        public bool isDeleted { get; set; } = false;
        
        public User(string name, string email, string password)
        {
            Name = name;
            Email = email;
            Password = password;
        }
    }
}