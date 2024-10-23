
using WakiBack.Models;

namespace WakiBack.DAL
{
    public interface IMatchAPIRepository : IRepository<MatchAPI>
    {
        Task UpdateData(MatchAPI match);
    }
}
