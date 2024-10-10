using WakiBack.Models;

namespace WakiBack.DAL
{
    public interface IUserRepository : IRepository<UserEF>
    {
        Task<UserEF?> GetByEmailAsync(string email, bool fullUser);
        void Update(UserEF userEF);
    }
}
