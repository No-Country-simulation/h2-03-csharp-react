using WakiBack.Models;


namespace WakiBack.BLL
{
    public interface IDivisionService
    {
        Task<IEnumerable<ShowDataDivisionVM>> GetDivisionsAndAssignAsync();
        Task<List<ShowDataDivisionVM>> GetAllCustomersAsync();
        Task<IEnumerable<ShowDataDivisionVM>> GetDivisionsByProfile(string userEmail);
        //Task<ShowDataDivisionVM> GetMyProfileAsync();

    }
}
