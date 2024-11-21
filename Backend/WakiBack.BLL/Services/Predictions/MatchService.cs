

using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Net;
using WakiBack.DAL;
using WakiBack.Models;

namespace WakiBack.BLL
{
    public class MatchService : BaseManagerGF, IMatchService
    {        
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<MatchService> _logger;
        private readonly IMapper _mapper;


        public MatchService( IUnitOfWork unitOfWork, ILogger<MatchService> logger, IHttpContextAccessor httpContextAccessor, IMapper mapper) : base(httpContextAccessor)
        {            
            _unitOfWork = unitOfWork;
            _logger = logger;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ShowMatchAPIVM>> GetAllPaginatedAsync(PaginationVM<MatchAPI, ShowMatchAPIVM> model, int? leagueId)
        {
            var items = await _unitOfWork.Matches.GetPaginatedAsync(model, leagueId);                                       

            return _mapper.Map<IEnumerable<ShowMatchAPIVM>>(items);
        }

        public async Task<IEnumerable<ShowMatchAPIVM>> GetAllResultsPaginatedAsync(PaginationVM<MatchAPI, ShowMatchAPIVM> model, int? leagueId)
        {
            var items = await _unitOfWork.Matches.GetAllResultsPaginatedAsync(model, leagueId);

            return _mapper.Map<IEnumerable<ShowMatchAPIVM>>(items);
        }


    }
}
