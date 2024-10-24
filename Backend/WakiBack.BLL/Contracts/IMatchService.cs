
using Microsoft.AspNetCore.Mvc;
using WakiBack.Models;

namespace WakiBack.BLL
{
    public interface IMatchService
    {
        Task<IEnumerable<ShowMatchAPIVM>> GetAllPaginatedAsync(PaginationVM<MatchAPI, ShowMatchAPIVM> model, int? leagueId);
    }
}
