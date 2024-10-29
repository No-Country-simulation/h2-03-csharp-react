

using System.Linq.Expressions;
using WakiBack.Models;

namespace WakiBack.DAL
{
    public interface IMatchAPIRepository : IRepository<MatchAPI>
    {
        Task<IEnumerable<MatchAPI>> GetPaginatedAsync(PaginationVM<MatchAPI, ShowMatchAPIVM> model, int? leagueId);
        Task UpdateData(MatchAPI match);
        Task<MatchAPI> GetFirstOrDefaultMatchAsync(Expression<Func<MatchAPI, bool>> expression);
        Task<IEnumerable<MatchAPI>> GetAllResultsPaginatedAsync(PaginationVM<MatchAPI, ShowMatchAPIVM> model, int? leagueId);
    }
}
