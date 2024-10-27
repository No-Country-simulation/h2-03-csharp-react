

using System.Linq.Expressions;
using WakiBack.Models;

namespace WakiBack.DAL
{
    public interface ITokenRepository : IRepository<TokenEntity>
    {

        Task<IEnumerable<TokenEntity>> GetAllTokensPaginated(PaginationVM<TokenEntity, ShowTokenVM> model);
    }
}
