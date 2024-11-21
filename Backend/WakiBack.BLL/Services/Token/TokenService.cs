using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Net;
using WakiBack.DAL;
using WakiBack.Models;

namespace WakiBack.BLL
{
    public class TokenService : BaseManagerGF, ITokenService
    { 
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<TokenService> _logger;
        private readonly IMapper _mapper;


        public TokenService(IUnitOfWork unitOfWork, ILogger<TokenService> logger, IHttpContextAccessor httpContextAccessor, IMapper mapper) : base(httpContextAccessor)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _mapper = mapper;
        }

        public async Task<BusinessResponse> CreateToken(CreateTokenVM model)
        {
            var tokenToAdd = _mapper.Map<TokenEntity>(model);
           
            await _unitOfWork.Tokens.AddAsync(tokenToAdd);

            await _unitOfWork.SaveAsync();

            return GetBusinessResponse(HttpStatusCode.OK, "Created Succesfully");


        }

        public async Task<IEnumerable<ShowTokenVM>> GetAllResultsPaginatedAsync(PaginationVM<TokenEntity, ShowTokenVM> model)
        {
            var items = await _unitOfWork.Tokens.GetAllTokensPaginated(model);

            return _mapper.Map<IEnumerable<ShowTokenVM>>(items);
        }


    }
}
