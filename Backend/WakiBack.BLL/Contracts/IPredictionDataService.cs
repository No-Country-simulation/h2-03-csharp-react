

using WakiBack.Models;
using WakiBack.Models.APIRequest;

namespace WakiBack.BLL
{
    public interface IPredictionDataService
    {      
        Task<List<LeagueAPI>> GetAllFromAPI(); 
        Task SeedDatabase();
        Task UpdateDatabase();

    }
}
