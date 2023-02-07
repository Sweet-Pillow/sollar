using Microsoft.EntityFrameworkCore;
using Sollar.Data;
using Sollar.DTOs;
using Sollar.Models;
using Sollar.Repositories.Interfaces;
using System.Text;

namespace Sollar.Repositories.Implementations
{
    public class ProjetoRepository : IProjetoRepository
    {
        private readonly AppDbContext _context;
        public ProjetoRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Projeto> AtualizarProjeto(AtualizarProjetoDTO atualizarProjeto, int id)
        {
            var projeto = await _context.Projeto.FindAsync(id);

            if (projeto == null) throw new Exception("Projeto não encontrado");

            projeto.Concessionaria = atualizarProjeto.Concessionaria;
            projeto.Potencia = atualizarProjeto.Potencia;
            projeto.Arquivo = Encoding.ASCII.GetBytes(atualizarProjeto.Arquivo);
            projeto.Cep = atualizarProjeto.Cep;
            projeto.Estado = atualizarProjeto.Estado;
            projeto.Cidade = atualizarProjeto.Cidade;
            projeto.Bairro = atualizarProjeto.Bairro;
            projeto.Endereco = atualizarProjeto.Endereco;
            projeto.Numero = atualizarProjeto.Numero;
            projeto.Complemento = atualizarProjeto.Complemento;

            await _context.SaveChangesAsync();

            return projeto;
        }

        public async Task<Projeto> CriarProjeto(CriarProjetoDTO criarProjeto, int id)
        {
            var usuario = await _context.Usuario.FindAsync(id);

            if (usuario == null) throw new Exception("Id de usuario invalido");

            Projeto Projeto = new()
            {
                Concessionaria = criarProjeto.Concessionaria,
                Potencia = criarProjeto.Potencia,
                Arquivo = Encoding.ASCII.GetBytes(criarProjeto.Arquivo),
                Cep = criarProjeto.Cep,
                Estado = criarProjeto.Estado,
                Cidade = criarProjeto.Cidade,
                Bairro = criarProjeto.Bairro,
                Endereco = criarProjeto.Endereco,
                Numero = criarProjeto.Numero,
                Complemento = criarProjeto.Complemento,
                UsuarioId = id,
                DataRegistro = DateTime.UtcNow,
            };

            await _context.Projeto.AddAsync(Projeto);
            await _context.SaveChangesAsync();

            return Projeto;
        }

        public async Task<string> DeletarProjeto(int id)
        {
            var projeto = await _context.Projeto.FindAsync(id);

            if (projeto == null) throw new Exception("ID não encontrado");

            _context.Projeto.Remove(projeto);
            await _context.SaveChangesAsync();

            return "Projeto apagado com sucesso";
        }

        public async Task<Projeto?> PegarProjetoPeloId(int id)
        {
            return await _context.Projeto.Where(p => p.Id == id).Include(u => u.Usuario).FirstOrDefaultAsync();
        }

        public async Task<IList<Projeto>> PegarTodosProjetos()
        {
            return _context.Projeto.Include(u => u.Usuario).ToList();
        }
    }
}
