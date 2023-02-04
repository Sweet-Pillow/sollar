using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sollar.Models
{
    [Table("projeto")]
    public class Projeto
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("concessionaria")]
        public string Concessionaria { get; set; }

        [Required]
        [Column("potencia")]
        public int Potencia { get; set; }

        [Required]
        [Column("arquivo")]
        public byte[] Arquivo { get; set; }

        [Required]
        [RegularExpression(@"[0-9]{5}-[0-9]{3}", ErrorMessage = "Formato de Cep invalido. Use xxxxx-xxx")]
        [Column("cep")]
        public string Cep { get; set; }

        [Required]
        [Column("estado")]
        public string Estado { get; set; }

        [Required]
        [Column("cidade")]
        public string Cidade { get; set; }

        [Required]
        [Column("bairro")]
        public string Bairro { get; set; }

        [Required]
        [Column("endereco")]
        public string Endereco { get; set; }

        [Required]
        [Column("numero")]
        public string Numero { get; set; }

        [Column("complemento")]
        public string Complemento { get; set; }

        [Required]
        [Column("id_usuario")]
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
