

using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using WakiBack.Models;

namespace WakiBack.DAL
{
    public class PredictionRepository (WebAppContext appContext) : Repository<Prediction>(appContext), IPredictionRepository
    {
        private readonly WebAppContext _appContext = appContext;

        public async Task UpdateAsync(Prediction prediction)
        {
            _appContext!.Predictions!.Update(prediction);
            await _appContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Prediction>> GetAllPredictionsAsync()
        {
            
            
            // Desactivar el lazy loading para este contexto temporal
            //_appContext.ChangeTracker.LazyLoadingEnabled = false;

            var predictions = await _appContext.Predictions!
            .Include(p => p.BetList!)
                .ThenInclude(b => b.ListMatch!)
                .ThenInclude(m => m.Match!)
                .ThenInclude(match => match.StageAPI)
            .Include(p => p.BetList!)
                .ThenInclude(b => b.ListMatch!)
                .ThenInclude(m => m.Match!)
                .ThenInclude(match => match.OddsAPI)
            .Include(p => p.BetList!)
                .ThenInclude(b => b.ListMatch!)
                .ThenInclude(m => m.Match!)
                .ThenInclude(match => match.TeamsAPI)
                    .ThenInclude(teams => teams.HomeAPI!)
                    .ThenInclude(home => home.TeamAPI)
            .Include(p => p.BetList!)
                .ThenInclude(b => b.ListMatch!)
                .ThenInclude(m => m.Match!)
                .ThenInclude(match => match.TeamsAPI)
                    .ThenInclude(teams => teams.AwayAPI!)
                        .ThenInclude(away => away.TeamAPI)
            .AsSplitQuery()
            .ToListAsync();



            return predictions;
            
        }

        public async Task<IEnumerable<Prediction>> GetAllPredictionForBetAsync()
        {
            IQueryable<Prediction> query = dbSet;
            query.Include(p => p.BetList);
            return await query.ToListAsync();
        }      


    }
}
