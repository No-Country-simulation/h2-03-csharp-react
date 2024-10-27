using WakiBack.Models;

namespace WakiBack.BLL
{
    public interface ITokenService
    {

        Task<BusinessResponse> CreateToken(CreateTokenVM model);
        Task<IEnumerable<ShowTokenVM>> GetAllResultsPaginatedAsync(PaginationVM<TokenEntity, ShowTokenVM> model);
    }
}