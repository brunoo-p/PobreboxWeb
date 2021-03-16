using System.Threading.Tasks;
using Pobrebox.Model;

namespace Pobrebox.Interfaces
{
    public interface IUser
    {
        bool Register(User user);
        User Login(string email, string password);
        
        bool ExcludeUser(int id);
    }
}