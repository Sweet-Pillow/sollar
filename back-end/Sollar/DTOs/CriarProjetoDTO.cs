using System.ComponentModel.DataAnnotations;

namespace Sollar.DTOs
{
    public class CriarProjetoDTO
    {
        
        public string Concessionaria { get; set; }

        
        public int Potencia { get; set; }

        
        public string Arquivo { get; set; }

        
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
