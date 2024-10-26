

using System.Linq.Expressions;
using WakiBack.Models;

namespace WakiBack.DAL
{
    public interface IPredictionRepository : IRepository<Prediction>
    {
        Task UpdateAsync(Prediction prediction);
        Task<IEnumerable<Prediction>> GetAllPredictionsAsync();
        Task<IEnumerable<Prediction>> GetAllPredictionForBetAsync();


    }
}
