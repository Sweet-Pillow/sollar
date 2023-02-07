using Sollar.Data;
using Sollar.Models;
using Sollar.Repositories.Interfaces;
using Sollar.Utils;

namespace Sollar.Repositories.Implementations
{
    public class AutenticacaoRepository : IAutenticacaoRepository
    {
        private readonly AppDbContext _context;
        public AutenticacaoRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Usuario> Autenticar(string login, string senha)
        {
            var _login = _context.Usuario.Where(u => u.Login == login)
                                        .Where(u => u.Senha == Criptografia.Encriptar(senha))
                                        .FirstOrDefault();

            if (_login == null) throw new Exception("Login ou senha invalidos.");
            
            return _login;
        }

    }
}
