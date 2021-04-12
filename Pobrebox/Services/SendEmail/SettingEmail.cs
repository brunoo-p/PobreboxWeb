using System;
using System.Net.Mail;
using System.Threading.Tasks;
using SendEmail.EmailBody;

namespace Pobrebox.Services.SendEmail
{
    public class SettingEmail
    {
        public static bool emailSended(string emailUser)
        {
            var body = Body.Message();

            AlternateView htmlView = AlternateView.CreateAlternateViewFromString(body, null, "text/html");

            MailMessage email = SettingEmail.Building(htmlView, emailUser);

            try{

                SmtpClient mailClient = new SmtpClient("stmp.gmail.com", 587)
                {
                    EnableSsl = true,
                    Credentials = new System.Net.NetworkCredential("o.paulino.brun@gmail.com", "Ba7iman23")
                };

                mailClient.Send(email);
                
                return true;

            }catch(Exception)
            {
                return false;
            }
        }
        public static MailMessage Building(AlternateView htmlView, string emailUser)
        {
            var email = new MailMessage();
            email.From = new MailAddress("o.paulino.brun@gmail.com", "Pobrebox");
            email.To.Add(new MailAddress(emailUser));
            
            email.Subject = "Verificação";
            
            email.IsBodyHtml = true;
            email.AlternateViews.Add(htmlView);
            email.Priority = MailPriority.High;
    
            return email;
        }
    }
}