using System.Threading.Tasks;
using Pobrebox.Model;

namespace Pobrebox.Interfaces
{
    public interface IUser
    {
        Task<bool> Register(User user);
        User Login(string email, string password);        
        Task<bool> ExcludeUser(int id);
        bool ConfirmUserForchangePass(string email);
    }
}