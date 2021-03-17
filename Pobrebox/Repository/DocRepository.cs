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

        public List<Document> GetDocumentForDirectory(int idUser, string directory)
        {
            var docs = new List<Document>();
            try{
                using(var connection = openConnection())
                {
                    using(var command = connection.CreateCommand())
                    {
                        connection.Open();
                        command.CommandText = "Select * from documents where IdUser=@idUser AND Directory=@directory AND isDeleted=0";
                        command.Parameters.Add(new SqlParameter("idUser", idUser));
                        command.Parameters.Add(new SqlParameter("directory", directory));

                        using(var reader = command.ExecuteReader())
                        {
                            while(reader.Read())
                            {
                                docs.Add( new Document(
                                    id: Convert.ToInt32(reader["Id"].ToString()),
                                    idUser: Convert.ToInt32(reader["IdUser"].ToString()),
                                    docName: reader["DocName"].ToString(),
                                    directory: reader["Directory"].ToString(),
                                    content: reader["Content"].ToString()
                                ));
                            }
                        }
                        connection.Close();
                    }
                }
                return docs;
            }catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}