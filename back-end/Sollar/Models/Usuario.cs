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

        [Required(ErrorMessage = "Senha necessario")]
        [StringLength(20, ErrorMessage = "Deve ter entre 5 a 20 caracteres.", MinimumLength = 5)]
        [DataType(DataType.Password)]
        [Column("senha")]
        public string Senha { get; set; }


        [Required(ErrorMessage = "É necessario confirmar a senha.")]
        [StringLength(20, ErrorMessage = "Deve ter entre 5 a 20 caracteres.", MinimumLength = 5)]
        [DataType(DataType.Password)]
        [Compare("confirmar_senha")]
        public string ConfirmarSenha { get; set; }

        [Required]
        [Column("primeiro_nome")]
        public string PrimeiroNome { get; set; }

        [Required]
        [Column("sobrenome")]
        public string Sobrenome { get; set; }

        [Required]
        [RegularExpression(@"\d{3}\.\d{3}\.\d{3}-\d{2}", ErrorMessage = "Formato invalido de CPF. Use xxx.xxx.xxx-xx")]
        [Column("cpf")]
        public string Cpf { get; set; }

        [EmailAddress]
        [Column("email")]
        public string Email { get; set; }

        [Phone]
        [RegularExpression(@"\(\d{2}\)\s\d{4}-\d{4}", ErrorMessage = "Formato de numero de telefone invalido. Use (xx) xxxx-xxxx")]
        [Column("telefone")]
        public string Telefone { get; set; }

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
        [Column("data_registro")]
        public DateTime DataRegistro { get; set; }
    }
}
