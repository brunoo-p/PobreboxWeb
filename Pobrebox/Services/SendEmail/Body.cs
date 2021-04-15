namespace SendEmail.EmailBody
{
    class Body
    {
        public static string Message(string code)
        {
            string suporte = "https://join.skype.com/nFOwFFXWkQmK";

            return
            $"<html>" + 
                $"<div>" + 
                    $"<h3> A equipe Pobrebox recebeu um pedido para mudança de senha </h3>" +
                    $"<span> Caso tenha sido você quem fez a solicitação, enviamos o código para confirmação. </span>" +
                    $"<p> Copie este código: </p> <h3> <b> { code } </b> </h3>" + 

                    $"<p> Caso não saiba do que se trata, entre em contanto com o suporte. </p>" +
                    $"<a href={ suporte } target=\"_blank\"> Nosso Suporte </a>" +
                $"</div>" +
            $"</html>";
        }
    }
}