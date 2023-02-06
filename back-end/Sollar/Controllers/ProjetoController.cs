using Microsoft.AspNetCore.Mvc;
using Sollar.DTOs;
using Sollar.Repositories.Interfaces;

namespace Sollar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetoController : Controller
    {
        private readonly IProjetoRepositorie _projetoRepositorie;
        public ProjetoController(IProjetoRepositorie projetoRepositorie)
        {
            _projetoRepositorie = projetoRepositorie;
        }

        [HttpGet]
        public async Task<IActionResult> PegarTodosOsProjetos()
        {
            try
            {
                var projeto = await _projetoRepositorie.PegarTodosProjetos();
                return Ok(projeto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> PegarProjetoPeloId([FromRoute]int id)
        {
            try
            {
                var projeto = await _projetoRepositorie.PegarProjetoPeloId(id);
                return Ok(projeto);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> CriarProjeto(CriarProjetoDTO criarProjeto, [FromRoute] int id)
        {
            try
            {
                var projeto = await _projetoRepositorie.CriarProjeto(criarProjeto, id);
                return Ok(projeto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> AtualizarProjeto(AtualizarProjetoDTO atualizarProjeto, [FromRoute]int id)
        {
            try
            {
                var projeto = await _projetoRepositorie.AtualizarProjeto(atualizarProjeto, id);
                return Ok(projeto);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletarProjeto([FromRoute]int id)
        {
            try
            {
                var projeto = await _projetoRepositorie.DeletarProjeto(id);
                return Ok(projeto);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
