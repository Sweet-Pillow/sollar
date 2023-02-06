using System.Security.Cryptography;
using System.Text;

namespace Sollar.Utils
{
    public class Criptografia
    {
        public static byte[] Encriptar(string _senha)
        {
            SHA256Managed sha256 = new();
            byte[] senhaBytes = Encoding.UTF8.GetBytes(_senha);
            return sha256.ComputeHash(senhaBytes);
        }

        //public string Descriptar()
        //{
            
        //}
    }
}
