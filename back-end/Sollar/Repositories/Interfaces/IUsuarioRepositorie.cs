using Sollar.DTOs;
using Sollar.Models;

namespace Sollar.Repositories.Interfaces
{
    public interface IUsuarioRepositorie
    {
        public Task<IList<Usuario>> PegarTodosUsuarios();
        public Task<Usuario> PegarUsuarioPorId(int id);
        public Task<Usuario> CriarUsuario(CriarUsuarioDTO criarUsuario);
        public Task<Usuario> AtualizarUsuario(AtualizarUsuarioDTO atualizarUsuario, int id);
        public Task<string> DeletarUsuario(int id);
    }
}
