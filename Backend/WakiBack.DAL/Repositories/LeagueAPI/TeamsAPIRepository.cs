
using WakiBack.Models;

namespace WakiBack.DAL
{
    public class TeamsAPIRepository(WebAppContext appContext) : Repository<TeamsAPI>(appContext), ITeamsAPIRepository
    {
        private readonly WebAppContext _appContext = appContext;


    }
}
