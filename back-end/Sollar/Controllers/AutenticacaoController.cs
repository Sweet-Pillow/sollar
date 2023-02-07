using Microsoft.AspNetCore.Mvc;
using Sollar.Models;
using Sollar.Repositories.Interfaces;
using Sollar.Services;

namespace Sollar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutenticacaoController : Controller
    {
        private readonly IAutenticacaoRepository _autenticacaoRepository;
        public AutenticacaoController(IAutenticacaoRepository autenticacaoRepository)
        {
            _autenticacaoRepository = autenticacaoRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Autenticacao(string login, string senha)
        {
            try
            {
                var usuario = await _autenticacaoRepository.Autenticar(login, senha);
                
                var token = TokenService.GenerateToken(usuario);
                    
                return Ok(token);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
