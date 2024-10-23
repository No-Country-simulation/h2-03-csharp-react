

using WakiBack.Models;

namespace WakiBack.DAL
{
    public class MatchAPIRepository(WebAppContext appContext) : PaginatedRepository<MatchAPI>(appContext), IMatchAPIRepository
    {
        private readonly WebAppContext _appContext = appContext;

        public async Task UpdateData(MatchAPI match)
        {          
            _appContext.Matchs!.Update(match);
            await _appContext.SaveChangesAsync();
        }
    }
}
