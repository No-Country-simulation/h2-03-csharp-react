using WakiBack.Models;

namespace WakiBack.BLL
{
    public interface ILeagueService
    {
        Task<IEnumerable<ShowLeagueAPIVM>> GetAllLeagues();
    }
}