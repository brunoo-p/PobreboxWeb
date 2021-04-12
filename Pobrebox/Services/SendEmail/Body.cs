namespace SendEmail.EmailBody
{
    class Body
    {
        public static string Message(string code)
        {
            return
            $"<html> <h2> Código para verificação da troca de senha</h2>" +
                $"<h3> <b> { code } </b> </h3>" +
            $"</html>";
        }
    }
}