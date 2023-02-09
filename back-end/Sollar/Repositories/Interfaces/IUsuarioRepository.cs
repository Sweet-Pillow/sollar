using Sollar.DTOs;
using Sollar.Models;

namespace Sollar.Repositories.Interfaces
{
    public interface IUsuarioRepository
    {
        public Task<IList<Usuario>> PegarTodosUsuarios();
        public Task<Usuario> PegarUsuarioPorId(int id);
        public Task<bool> VerificaLoginExiste(string login);
        public Task<bool> VerificaEmailExiste(string email);
        public Task<bool> VerificaCpfExiste(string cpf);
        public Task<Usuario> CriarUsuario(CriarUsuarioDTO criarUsuario);
        public Task<Usuario> AtualizarUsuario(AtualizarUsuarioDTO atualizarUsuario, int id);
        public Task<string> DeletarUsuario(int id);
    }
}
