using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Pobrebox.Interfaces;
using Pobrebox.Model;

namespace Pobrebox.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        IUser repository;
        public UserController (IUser _repository)
        {
            repository = _repository;
        }

        [HttpPost]
        public ActionResult<User> Login(string email, string password)
        {
            if(string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            {
                return BadRequest("Existem campos não preenchidos.");
            }

            try{
                var user = repository.Login(email, password);
                if(user == null){
                    return StatusCode(203, "Este usuário não existe.");
                }

                return Ok(user);

            }catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            try
            {
                var userDeleted = await repository.ExcludeUser(id);
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
        [Route("register")]
        public async Task<ActionResult> RegisterUser(User user)
        {
            try{

                var newUser = await repository.Register(user);
                if(!newUser)
                {
                    return StatusCode(203, "Usuário não pôde ser Cadastrado");
                }

                return StatusCode(201, "Usuario cadastrado com sucesso!" );
            }catch(Exception ex)
            {
                throw ex;
            }

        }

        [HttpGet]
        [Route("settingpass/{email}/{code}")]
        public ActionResult<User> ConfirmUserForchangePass(string email, string code)
        {
            try{
                var user = repository.ConfirmUserForchangePass(email, code);
                
                if(user == null){
                    return StatusCode(203, "Usuário não existe");
                }
                user.Password = "*";
                return StatusCode(200, user);
            
            }catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        [Route("changePass")]
        public async Task<ActionResult<User>> ChangePassword(int id, string newPass)
        {
            try{
                var user = await repository.ChangePassword(id, newPass);

                return user;
            }catch(Exception ex)
            {
                throw ex;
            }

        }        
    }
}