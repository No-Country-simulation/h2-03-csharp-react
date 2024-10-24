

using WakiBack.Models;

namespace WakiBack.BLL
{
    public interface ICustomerService
    {
        Task<ShowCustomerDataVM> GetMyProfileAsync(string userEmail);

    }
}
