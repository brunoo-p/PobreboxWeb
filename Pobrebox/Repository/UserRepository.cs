using System;
using System.Linq;
using System.Threading.Tasks;
using Pobrebox.Interfaces;
using Pobrebox.Model;
using Pobrebox.Services.SendEmail;

namespace Pobrebox.Repository
{
    public class UserRepository : IUser
    {   
        private readonly Context _context;

        public UserRepository(Context context)
        {
            _context = context;
        }

        public async Task<User> ChangePassword(int id, string newPass)
        {
            try{
                var user = _context.Users.FirstOrDefault(u => u.Id == id);
                user.Password = newPass;

                await _context.SaveChangesAsync();
                return user;

            }catch(Exception ex)
            {
                throw ex;
            }

        }

        public User ConfirmUserForchangePass(string email)
        {
            try{
                var user = _context.Users.FirstOrDefault(u => u.Email == email);
                /*
                    Function for generate random code
                */
                
                var sended = SettingEmail.emailSended("brun.op@hotmail.com");
                
                return user;


            }catch(Exception){
                throw;
            }
            
        }

        public async Task<bool> ExcludeUser(int id)
        {
            try{
                var user = _context.Users.FirstOrDefault(u =>  u.Id == id);
                
                if(user == null)
                {
                    return false;
                }

                user.isDeleted = true;
                await _context.SaveChangesAsync();
                
                return true;
            }catch(Exception){
                return false;
            }
        }

        public User Login(string email, string password)
        {
            try{

                var user = _context.Users.FirstOrDefault(u => u.Email == email && u.Password == password);

                if(user.isDeleted){
                    return null;
                }

                if(user == null)
                {
                    return null;
                }
                user.Password = "*";
                return user;
            }catch(Exception)
            {
                return null;
            }
        }

        public async Task<bool> Register(User user)
        {
            if(string.IsNullOrEmpty(user.Name) || string.IsNullOrEmpty(user.Email) || string.IsNullOrEmpty(user.Password))
                {
                    return false;
                }

            try{
                var newUser = new User(user.Name, user.Email, user.Password);    
            
                await _context.Users.AddAsync(newUser);
                await _context.SaveChangesAsync();
                return true;
            
            }catch(Exception ex)
            {
                throw ex;
            }
        }

    }
}