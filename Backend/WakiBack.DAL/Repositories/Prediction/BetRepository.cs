

using Microsoft.EntityFrameworkCore;
using WakiBack.Models;

namespace WakiBack.DAL
{
    public class BetRepository(WebAppContext appContext) : Repository<Bet>(appContext), IBetRepository
    {
        private readonly WebAppContext _appContext = appContext;
   


        public async Task<IEnumerable<Bet>> GetAllBetsForCheckWin()
        {                

            // Desactivar el lazy loading para este contexto temporal
            _appContext.ChangeTracker.LazyLoadingEnabled = false;

            
            var predictions = await _appContext.Bets!
                .Include(p => p.ListMatch!)
                .Include(p => p.Prediction!.CustomerEF)
                .ToListAsync();


            return predictions;


        }

        public async Task UpdateListBets(List<Bet> listBet)
        {
            _appContext.Bets!.UpdateRange(listBet);
            await _appContext.SaveChangesAsync();
        }


    }
}
