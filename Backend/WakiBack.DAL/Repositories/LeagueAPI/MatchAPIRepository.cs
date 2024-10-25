

using Microsoft.EntityFrameworkCore;
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

        public async Task<IEnumerable<MatchAPI>> GetPaginatedAsync(PaginationVM<MatchAPI, ShowMatchAPIVM> model, int? leagueId)
        {
            var isDisplay = typeof(MatchAPI).GetInterfaces().Contains(typeof(IDisplayNameEntity));

            if (!isDisplay) throw new Exception("Entity must implement IDisplayNameEntity");

            var isAuditable = typeof(MatchAPI).GetInterfaces().Contains(typeof(IAuditEntity));

            if (!isAuditable) throw new Exception("Entity must implement IAuditEntity");

            var isIdentifier = typeof(MatchAPI).GetInterfaces().Contains(typeof(IIdentifierEntity));

            if (!isIdentifier) throw new Exception("Entity must implement IIdentifierEntity");

            var isModelValid = model.PageNumber.HasValue && model.PageSize.HasValue;

            if (!isModelValid) throw new Exception("Page and size must have value");

            int page = model.PageNumber != null ? model.PageNumber.Value : 0;
            int size = model.PageSize != null ? model.PageSize.Value : 0;

            int skip = (page - 1) * size;

            IQueryable<MatchAPI> command = dbSet;

            if (!String.IsNullOrEmpty(model.SearchString))
            {
                command = command
                .Where(e => e.Deleted == null && e.Winner == "tbd" && e.LeagueId == leagueId && EF.Functions.Like(e.DisplayName!, "%" + model.SearchString + "%") ||
                    e.Deleted == null && e.Winner == "tbd" && e.LeagueId == leagueId && EF.Functions.Like(e.TeamsAPI!.HomeAPI!.TeamAPI!.Name, "%" + model.SearchString + "%") ||
                    e.Deleted == null && e.Winner == "tbd" && e.LeagueId == leagueId && EF.Functions.Like(e.TeamsAPI!.HomeAPI!.TeamAPI!.Name, "%" + model.SearchString + "%"))                
                .Include(m => m.StageAPI)
                .Include(m=>m.StageAPI!.LeagueAPI)
                .Include(m => m.OddsAPI)
                .Include(m => m.TeamsAPI)
                .Include(m => m.TeamsAPI!.AwayAPI)
                .Include(m => m.TeamsAPI!.HomeAPI)
                .Include(m => m.TeamsAPI!.AwayAPI!.TeamAPI)
                .Include(m => m.TeamsAPI!.HomeAPI!.TeamAPI)
                .Skip(skip)
                .Take(size)
                .OrderBy(e => e.Id);
            }
            else
            {
                command = command
                .Where(e => e.Deleted == null && e.Winner == "tbd" && e.LeagueId == leagueId)
                .Include(m => m.StageAPI)
                .Include(m => m.StageAPI!.LeagueAPI)
                .Include(m => m.OddsAPI)
                .Include(m => m.TeamsAPI)
                .Include(m => m.TeamsAPI!.HomeAPI)
                .Include(m => m.TeamsAPI!.AwayAPI)
                .Include(m => m.TeamsAPI!.AwayAPI!.TeamAPI)
                .Include(m => m.TeamsAPI!.HomeAPI!.TeamAPI)
                .Skip(skip)
                .Take(size)
                .OrderBy(e => e.Id);
            }

            return await command.ToListAsync();
        }

    }
}
