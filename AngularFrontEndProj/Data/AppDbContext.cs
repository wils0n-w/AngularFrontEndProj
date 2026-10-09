using Microsoft.EntityFrameworkCore;
using AngularFrontEndProj.Models;

namespace AngularFrontEndProj.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<TabelTelephone> TabelTelephone { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TabelTelephone>().ToTable("tabel_telephone");
            base.OnModelCreating(modelBuilder);
        }
    }
}
