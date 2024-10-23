

using WakiBack.Models;

namespace WakiBack.DAL
{ 
    public interface ILeagueAPIRepository : IRepository<LeagueAPI>
    {
        Task UpdateData(List<LeagueAPI> leagueList);
    }
}
