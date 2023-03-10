using System.ComponentModel.DataAnnotations;

namespace Sollar.DTOs
{
    public class AtualizarUsuarioDTO
    {
        public string PrimeiroNome { get; set; }
        public string Sobrenome { get; set; }

        [RegularExpression(@"\d{3}\.\d{3}\.\d{3}-\d{2}", ErrorMessage = "Formato invalido de CPF. Use xxx.xxx.xxx-xx")]
        public string Cpf { get; set; }

        [EmailAddress]
        public string? Email { get; set; }

        [RegularExpression(@"\(\d{2}\)\s\d{4}-\d{4}", ErrorMessage = "Formato de numero de telefone invalido. Use (xx) xxxx-xxxx")]
        public string? Telefone { get; set; }

        [RegularExpression(@"[0-9]{5}-[0-9]{3}", ErrorMessage = "Formato de Cep invalido. Use xxxxx-xxx")]
        public string Cep { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string Bairro { get; set; }
        public string Endereco { get; set; }
        public string Numero { get; set; }
        public string? Complemento { get; set; }
    }
}
