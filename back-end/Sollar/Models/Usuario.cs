using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sollar.Models
{
    [Table("usuario")]
    public class Usuario
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }


        [Required]
        [Column("login")]
        public string Login { get; set; }

        [Required]
        [Column("senha")]
        public byte[] Senha { get; set; }

        [Required]
        [Column("primeiro_nome")]
        public string PrimeiroNome { get; set; }

        [Required]
        [Column("sobrenome")]
        public string Sobrenome { get; set; }

        [Required]
        [Column("cpf")]
        public string Cpf { get; set; }

        [Column("email")]
        public string? Email { get; set; }

        [Column("telefone")]
        public string? Telefone { get; set; }

        [Required]
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
        public string? Complemento { get; set; }

        [Required]
        [Column("data_registro")]
        public DateTime DataRegistro { get; set; }
    }
}
