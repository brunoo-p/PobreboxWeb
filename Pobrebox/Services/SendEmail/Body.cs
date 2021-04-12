namespace SendEmail.EmailBody
{
    class Body
    {
        public static string Message(string code)
        {
            return
            $"<html> <h4> Código para verificação da troca de senha</h4>" +
                $"<span> Copie este código: </span> <h3> <b> { code } </b> </h3>" +
            $"</html>";
        }
    }
}