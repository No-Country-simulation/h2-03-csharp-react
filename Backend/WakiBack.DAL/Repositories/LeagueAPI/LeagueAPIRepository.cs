
using WakiBack.Models;

namespace WakiBack.DAL
{  
    public class LeagueAPIRepository(WebAppContext appContext) : PaginatedRepository<LeagueAPI>(appContext), ILeagueAPIRepository
    {
        private readonly WebAppContext _appContext = appContext;

        //TODO: Move to manager, business logic goes into managers
        public async Task UpdateData(List<LeagueAPI> leagueList)
        {

            _appContext.Leagues!.UpdateRange(leagueList);
            await _appContext.SaveChangesAsync();
        }
    }
}
