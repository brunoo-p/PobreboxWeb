using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using Microsoft.Data.SqlClient;
using Pobrebox.Interfaces;
using Pobrebox.Model;

namespace Pobrebox.Repository
{
    public class DocRepository : IDocument
    {

        private IDbConnection openConnection()
        {
            return new SqlConnection("Server=localhost\\SQLEXPRESS;Database=Pobrebox;Trusted_Connection=True;");
        }
        
        public bool AddDocument(Document doc)
        {
            //if(d)
            //{
                using(var connection = openConnection())
                {
                    connection.Open();
                    try{
                        using(var command = connection.CreateCommand())
                        {
                            command.CommandText =
                              "INSERT INTO Documents(IdUser, DocName, Directory, Content, IsDeleted) values (@IdUser, @DocName, @Directory, @Content, @IsDeleted)";
                            
                            ConfigureParametersForAdd(command, doc);
                            command.ExecuteNonQuery();
                            return true;     
                        }
                    }catch(Exception)
                    {
                        connection.Close();
                        return false;
                    }
                }
            //}
            //return true;
        }

        private void ConfigureParametersForAdd(IDbCommand command, Document file)
        {
            command.Parameters.Add(new SqlParameter("IdUser", file.IdUser));
            command.Parameters.Add(new SqlParameter("DocName", Path.GetFileName(file.Content)));
            command.Parameters.Add(new SqlParameter("Directory", file.Directory));
            command.Parameters.Add(new SqlParameter("Content", File.ReadAllBytes(file.Content)));
            command.Parameters.Add(new SqlParameter("IsDeleted", false));
        }


        public bool ExcludeDocument(int id)
        {

            using(var connection = openConnection())
                {
                    connection.Open();
                    try{
                        using(var command = connection.CreateCommand())
                        {
                            command.CommandText = "UPDATE Documents SET isDeleted = 1 WHERE Id= @id";
                            command.Parameters.Add(new SqlParameter("id", id));
                            command.ExecuteNonQuery();
                            return true;     
                        }
                    }catch(Exception)
                    {
                        connection.Close();
                        return false;
                    }
                }
        }

        public List<Document> GetDocumentForDirectory(string directory)
        {
            throw new System.NotImplementedException();
        }

        public List<Document> GetDocumentForUser(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}