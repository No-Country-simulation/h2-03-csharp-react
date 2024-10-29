

using WakiBack.Models;

namespace WakiBack.BLL
{
    public interface IPredictionService
    {

        Task<BusinessResponse> CreateBet(CreateBetVM model, string email);
        Task<IEnumerable<ShowPredictionVM>> GetAllMyPredictions(string email);
    }
}
