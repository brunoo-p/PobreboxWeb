using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Pobrebox.Model;
using Pobrebox.Repository;

namespace Pobrebox.Controllers
{
    public class UserController : Controller
    {
        private readonly UserRepository repository;

        [HttpGet]
        public async Task<IActionResult> Login(string email, string password)
        {
            try{
                var user = repository.Login(email, password);
                if(user == null){
                    return NotFound();
                }
                return Ok(user);

            }catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            try
            {
                var userDeleted = repository.ExcludeUser(id);
                if(!userDeleted)
                {
                    return NotFound();
                }

                return Ok(userDeleted);

            }catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] User user)
        {
            var newUser = repository.Register(user);
            if(!newUser)
            {
                return BadRequest("Usuário não Cadastrado");
            }

            return Ok(newUser);

        }
        
    }
}