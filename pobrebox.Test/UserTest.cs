using System;
using Pobrebox.Model;
using Pobrebox.Repository;
using Xunit;

namespace pobrebox.Test
{
    public class UserTest
    {
        UserRepository repository = new UserRepository();
        
        [Fact(DisplayName= "Register")]
        [Trait("User", "Register")]
        public void CriarNovoUsarioERetornarTrue()
        {

            //average
            var user = new User ( name: "Maisa", email: "meu@email.com", password: "1234" );
            bool created = false;
            
            //act        
            bool newUser = repository.Register(user);
            //User userLogged = repository.Login(user.Email, user.Password);

            //assert
            Assert.NotNull(user);
            Assert.IsType<bool>(newUser);
            Assert.NotEqual(created, newUser);
            Assert.True(newUser);
            
            //Test user Logged
            // Assert.Equal(user.Name, userLogged.Name);
            // Assert.Equal(user.Email, userLogged.Email);
            // Assert.Equal(user.Password, userLogged.Password);
        }

        [Fact(DisplayName= "Login")]
        [Trait("User", "Login")]
        public void EfetuarLoginERetornarUsuario()
        {
            //average
                int correctId = 1;
                string correctEmail = "email@email.com";
                string correctPass = "12345";

            //act
            User userLogged = repository.Login(correctEmail, correctPass);

            //assert
            Assert.NotNull(userLogged);
            Assert.Equal(correctId, userLogged.Id);
            Assert.Equal(correctEmail,userLogged.Email);
            Assert.Equal(correctPass,userLogged.Password);

            //Test if user selected is deleted
            //bool deleted = repository.ExcludeUser(userLogged.Id);
            //Assert.True(deleted);
        }
        
        [Fact(DisplayName= "Exclude")]
        [Trait("User", "Exclude")]
        public void ExcluirUmUsuario()
        {
            //average
            int excludeUserId = 1004;
            bool isDeleted = false;

            //act
            bool userDeleted = repository.ExcludeUser(excludeUserId);

            //assert
            Assert.IsType<bool>(userDeleted);
            Assert.NotEqual(isDeleted, userDeleted);
            Assert.True(userDeleted);
        }
    }
}
