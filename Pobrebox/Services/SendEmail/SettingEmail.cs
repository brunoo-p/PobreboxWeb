using System;
using System.Net.Mail;
using SendEmail.EmailBody;

namespace Pobrebox.Services.SendEmail
{
    public class SettingEmail
    {
        public static void emailSended(string emailUser, string code)
        {

            var body = Body.Message(code);

            AlternateView htmlView = AlternateView.CreateAlternateViewFromString(body, null, "text/html");

            MailMessage email = SettingEmail.Building(htmlView, emailUser);

            try{

                SmtpClient mailClient = new SmtpClient("smtp.gmail.com", 587)
                {
                    EnableSsl = true,
                    Credentials = new System.Net.NetworkCredential("o.paulino.brun@gmail.com", "*senha*")
                };

                mailClient.Send(email);

            }catch(Exception ex)
            {
                throw ex;
            }
        }
        public static MailMessage Building(AlternateView htmlView, string emailUser)
        {
            var email = new MailMessage();
            email.From = new MailAddress("o.paulino.brun@gmail.com", "Pobrebox");
            email.To.Add(new MailAddress(emailUser));
            
            email.Subject = "[Pobrebox] Por favor, confirme seu e-mail";
            
            email.IsBodyHtml = true;
            email.AlternateViews.Add(htmlView);
            email.Priority = MailPriority.High;
    
            return email;
        }
    }
}