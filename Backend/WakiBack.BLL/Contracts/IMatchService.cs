
using Microsoft.AspNetCore.Mvc;
using WakiBack.Models;

namespace WakiBack.BLL
{
    public interface IMatchService
    {
        Task<IEnumerable<ShowMatchAPIVM>> GetAllPaginatedAsync(PaginationVM<MatchAPI, ShowMatchAPIVM> model, int? leagueId);
        Task<IEnumerable<ShowMatchAPIVM>> GetAllResultsPaginatedAsync(PaginationVM<MatchAPI, ShowMatchAPIVM> model, int? leagueId);
    }
}
