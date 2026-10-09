using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularFrontEndProj.Models
{
    [Table("tabel_telephone")]
    public class TabelTelephone
    {
        [Key]
        public int Id { get; set; }

        public string Nama_User { get; set; } = null!;

        public string Alamat { get; set; } = null!;

        public string No_Telp { get; set; } = null!;

        public string kode_post { get; set; } = null!;

        public DateTime date_time { get; set; }
    }
}
