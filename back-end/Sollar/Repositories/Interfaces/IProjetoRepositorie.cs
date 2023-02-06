using Sollar.DTOs;
using Sollar.Models;

namespace Sollar.Repositories.Interfaces
{
    public interface IProjetoRepositorie
    {
        public Task<IList<Projeto>> PegarTodosProjetos();
        public Task<Projeto?> PegarProjetoPeloId(int id);
        public Task<Projeto> CriarProjeto(CriarProjetoDTO criarProjeto, int id);
        public Task<Projeto> AtualizarProjeto(AtualizarProjetoDTO atualizarProjeto, int id);
        public Task<string> DeletarProjeto(int id);
    }
}
