using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Pobrebox.Interfaces;
using Pobrebox.Model;

namespace Pobrebox.Repository
{
    public class UserRepository : IUser
    {   
        //private readonly Context _context;
        private SqlConnection connection = new SqlConnection("Server=localhost\\SQLEXPRESS;Database=Pobrebox;Trusted_Connection=True");
        string query;
        private SqlCommand command;

        public bool ExcludeUser(int id)
        {
            query = "UPDATE Users SET isDeleted= 1 WHERE Id='" + id + "'";
            command = new SqlCommand(query, connection);
            command.CommandType = CommandType.Text;
            try{

                connection.Open();
                command.ExecuteNonQuery();
                connection.Close();
                return true;

            }catch(Exception){
                connection.Close();
                command = null;
                return false;
            }
        }

        public User Login(string email, string password)
        {
            try{

                if(string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
                {
                    return null;
                }

                query = "Select * from Users where Email='"+ email +"'and Password='"+ password +"' and isDeleted=0";
                command = new SqlCommand(query, connection);
                var docs = new List<Document>();
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                if(reader.Read())
                { 
                    int idDb = Convert.ToInt32(reader[0]);
                    string nameDb = reader[1].ToString();
                    string emailDb = reader[2].ToString();
                    string passwordDb = reader[3].ToString();

                    var user = new User(
                        id: idDb,
                        name: nameDb,
                        email: emailDb,
                        password: password
                        );

                    connection.Close();
                    command = null;
                    return user;

                }else{
                    connection.Close();
                    command = null;
                    return null;
                }

            }catch(Exception)
            {
                connection.Close();
                command = null;
                return null;
            }
        }

        private List<Document> getAllDocs(int id)
        {   
            var doc = new List<Document>();
            using (var command = connection.CreateCommand())
            {
                command.CommandText = "Select Id, IdUser, DocName, Directory, Content from Documents where IdUser='"+id+"' AND isDeleted = 0";
                connection.Open();
                using(var reader = command.ExecuteReader())
                {
                    while(reader.Read())
                    {
                        doc.Add(new Document(
                            id: Convert.ToInt32(reader[0].ToString()),
                            idUser: Convert.ToInt32(reader[1].ToString()),
                            docName: reader[2].ToString(),
                            directory: reader[3].ToString(),
                            content: reader[4].ToString()
                            )
                        );
                    }
                }   
            }
            connection.Close();
            return doc;
        }

        public bool Register(User user)
        {
            if(string.IsNullOrEmpty(user.Name) || string.IsNullOrEmpty(user.Email) || string.IsNullOrEmpty(user.Password))
                {
                    return false;
                }

            query = "Insert into Users (Name, Email, Password) values ('" + user.Name + "','" + user.Email + "','" + user.Password +"')";
            command = new SqlCommand(query, connection);
            command.CommandType = CommandType.Text;
            connection.Open();
            try{
                command.ExecuteNonQuery();
                connection.Close();
                command = null;
                return true;

            }catch(Exception){
                connection.Close();
                command = null;
                return false;
            }
        }
    }
}