using identityserver.Models;

namespace identityserver.Repositories {
    public interface IAuthRepository {
        User GetUserById(string id);
        User GetUserByUsername(string username);
        bool ValidatePassword(string username, string password);
    }
}
