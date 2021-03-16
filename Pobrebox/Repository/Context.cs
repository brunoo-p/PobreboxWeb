using Microsoft.EntityFrameworkCore;
using Pobrebox.Model;

namespace Pobrebox.Repository
{
    public class Context : DbContext
    {
        public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString:"Server=localhost\\SQLEXPRESS;Database=Pobrebox;Trusted_Connection=True");
        }
    }
}