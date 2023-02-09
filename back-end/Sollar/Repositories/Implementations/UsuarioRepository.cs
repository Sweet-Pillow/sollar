using Microsoft.EntityFrameworkCore;
using Sollar.Data;
using Sollar.DTOs;
using Sollar.Models;
using Sollar.Repositories.Interfaces;
using Sollar.Utils;

namespace Sollar.Repositories.Implementations
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly AppDbContext _context;
        public UsuarioRepository(AppDbContext context)
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
            var verificarLoginExistente = await _context.Usuario.Where(u => u.Login == criarUsuario.Login)
                                                                .FirstOrDefaultAsync();

            if (verificarLoginExistente != null) throw new Exception("Login já existe"); 

            var verificarCpfExistente = await _context.Usuario.Where(u => u.Cpf == criarUsuario.Cpf)
                                                                .FirstOrDefaultAsync();

            if (verificarCpfExistente != null) throw new Exception("Cpf já existe");

            var verificarEmailExistente = await _context.Usuario.Where(u => u.Email == criarUsuario.Email)
                                                                .FirstOrDefaultAsync();

            if (verificarEmailExistente != null) throw new Exception("Email já existe");

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

        public async Task<bool> VerificaCpfExiste(string cpf)
        {
            var usuario = await _context.Usuario.Where(u => u.Cpf == cpf)
                                            .FirstOrDefaultAsync();

            return usuario == null ? false : true;
        }

        public async Task<bool> VerificaEmailExiste(string email)
        {
            var usuario = await _context.Usuario.Where(u => u.Email == email)
                                            .FirstOrDefaultAsync();

            return usuario == null ? false : true;
        }

        public async Task<bool> VerificaLoginExiste(string login)
        {
            var usuario = await _context.Usuario.Where(u => u.Login == login)
                                            .FirstOrDefaultAsync();

            return usuario == null ? false : true;
        }
    }
}
