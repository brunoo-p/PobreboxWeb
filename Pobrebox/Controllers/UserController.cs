using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Pobrebox.Model;
using Pobrebox.Repository;

namespace Pobrebox.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        UserRepository repository;
        public UserController (UserRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet]
        public User Login(string email, string password)
        {
            try{
                var user = repository.Login(email, password);
                if(user == null){
                    return null;
                }
                Console.WriteLine("ALO", user);
                return user;

            }catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteUser(int id)
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
        public ActionResult RegisterUser([FromBody] User user)
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