using Microsoft.EntityFrameworkCore;
using Pobrebox.Model;

namespace Pobrebox.Repository
{
    public class Context : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=pobreboxApi;Trusted_Connection=True");
        }
       public Context(DbContextOptions<Context> options) : base(options) {}

       public DbSet<User> Users { get; set; }
       public DbSet<Document> Documents { get; set; }

    }
}