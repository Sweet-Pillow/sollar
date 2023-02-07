using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sollar.DTOs;
using Sollar.Repositories.Interfaces;

namespace Sollar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepository _usuarioRepositorie;
        public UsuarioController(IUsuarioRepository usuarioRepositorie)
        {
            _usuarioRepositorie = usuarioRepositorie;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> PegarTodosUsuarios()
        {
            try
            {
                var usuario = await _usuarioRepositorie.PegarTodosUsuarios();
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> PegarUsuarioPorId([FromRoute]int id)
        {
            try
            {
                var usuario = await _usuarioRepositorie.PegarUsuarioPorId(id);
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CriarUsuario(CriarUsuarioDTO criarUsuario)
        {
            try
            {
                var usuario = await _usuarioRepositorie.CriarUsuario(criarUsuario);
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> AtualizarUsuario(AtualizarUsuarioDTO atualizarUsuario, [FromRoute]int id)
        {
            try
            {
                var usuario = await _usuarioRepositorie.AtualizarUsuario(atualizarUsuario, id);
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeletarUsuario([FromRoute]int id)
        {
            try
            {
                var usuario = await _usuarioRepositorie.DeletarUsuario(id);
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
