
using WakiBack.Models;

namespace WakiBack.DAL
{
    public class TeamAPIRepository(WebAppContext appContext) : Repository<TeamAPI>(appContext), ITeamAPIRepository
    {
        private readonly WebAppContext _appContext = appContext;

       
    }
}
