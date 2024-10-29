
using Microsoft.EntityFrameworkCore;
using WakiBack.Models;

namespace WakiBack.DAL
{  
    public class LeagueAPIRepository(WebAppContext appContext) : PaginatedRepository<LeagueAPI>(appContext), ILeagueAPIRepository
    {
        private readonly WebAppContext _appContext = appContext;
        
        public async Task UpdateData(List<LeagueAPI> leagueList)
        {

            _appContext.Leagues!.UpdateRange(leagueList);
            await _appContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<LeagueAPI>> GetAllLeaguesAsync()
        {           

            var leagues = await _appContext.Leagues!
                .Include(p => p.Country!)               
                .ToListAsync();

            return leagues;
        }


    }
}
