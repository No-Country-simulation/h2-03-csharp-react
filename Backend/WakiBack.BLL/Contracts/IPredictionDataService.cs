

using WakiBack.Models;


namespace WakiBack.BLL
{
    public interface IPredictionDataService
    {      
        Task<List<LeagueAPI>> GetAllFromAPI(); 
        Task <BusinessResponse> SeedDatabase();
        Task <BusinessResponse> UpdateDatabase();

    }
}
