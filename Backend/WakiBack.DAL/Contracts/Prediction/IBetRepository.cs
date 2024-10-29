

using Microsoft.EntityFrameworkCore;
using WakiBack.Models;

namespace WakiBack.DAL
{
    public interface IBetRepository : IRepository<Bet>
    {
        Task<IEnumerable<Bet>> GetAllBetsForCheckWin();
        Task UpdateListBets(List<Bet> listBet);
    }
}
