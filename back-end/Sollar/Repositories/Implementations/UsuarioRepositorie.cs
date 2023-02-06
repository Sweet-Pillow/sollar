using Sollar.Data;
using Sollar.DTOs;
using Sollar.Models;
using Sollar.Repositories.Interfaces;
using Sollar.Utils;

namespace Sollar.Repositories.Implementations
{
    public class UsuarioRepositorie : IUsuarioRepositorie
    {
        private readonly AppDbContext _context;
        public UsuarioRepositorie(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Usuario> AtualizarUsuario(AtualizarUsuarioDTO atualizarUsuario, int id)
        {
            var usuario = await _context.Usuario.FindAsync(id);

            if (usuario == null) throw new ArgumentNullException("Usuario não existente.");

            usuario.PrimeiroNome = atualizarUsuario.PrimeiroNome;
            usuario.Sobrenome = atualizarUsuario.Sobrenome;
            usuario.Cpf = atualizarUsuario.Cpf;
            usuario.Email = atualizarUsuario.Email;
            usuario.Telefone = atualizarUsuario.Telefone;
            usuario.Cep = atualizarUsuario.Cep;
            usuario.Estado = atualizarUsuario.Estado;
            usuario.Cidade = atualizarUsuario.Cidade;
            usuario.Bairro = atualizarUsuario.Bairro;
            usuario.Endereco = atualizarUsuario.Endereco;
            usuario.Numero = atualizarUsuario.Numero;
            usuario.Complemento = atualizarUsuario.Complemento;

            await _context.SaveChangesAsync();

            return usuario;
        }

        public async Task<Usuario> CriarUsuario(CriarUsuarioDTO criarUsuario)
        {
            Usuario usuario = new()
            {
                Login = criarUsuario.Login,
                Senha = Criptografia.Encriptar(criarUsuario.Senha),
                PrimeiroNome = criarUsuario.PrimeiroNome,
                Sobrenome = criarUsuario.Sobrenome,
                Cpf = criarUsuario.Cpf,
                Email = criarUsuario.Email,
                Telefone = criarUsuario.Telefone,
                Cep = criarUsuario.Cep,
                Estado = criarUsuario.Estado,
                Cidade = criarUsuario.Cidade,
                Bairro = criarUsuario.Bairro,
                Endereco = criarUsuario.Endereco,
                Numero = criarUsuario.Numero,
                Complemento = criarUsuario.Complemento,
                DataRegistro = DateTime.UtcNow,
            };

            await _context.Usuario.AddAsync(usuario);
            await _context.SaveChangesAsync();

            return usuario;
        }

        public async Task<string> DeletarUsuario(int id)
        {
            var usuario = await _context.Usuario.FindAsync(id);

            if (usuario == null) throw new ArgumentNullException("Usuario não existente.");

            _context.Usuario.Remove(usuario);
            _context.SaveChanges();

            return "Usuario apagado com sucesso";
        }

        public async Task<IList<Usuario>> PegarTodosUsuarios()
        {
            return _context.Usuario.ToList();
        }

        public async Task<Usuario> PegarUsuarioPorId(int id)
        {
            var usuario = await _context.Usuario.FindAsync(id);

            if (usuario == null) throw new ArgumentNullException("ID não encontrado");
            return usuario;
        }
    }
}
