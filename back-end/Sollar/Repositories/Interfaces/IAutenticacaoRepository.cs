using Sollar.Models;

namespace Sollar.Repositories.Interfaces
{
    public interface IAutenticacaoRepository
    {
        public Task<Usuario> Autenticar(string login, string senha);
    }
}
