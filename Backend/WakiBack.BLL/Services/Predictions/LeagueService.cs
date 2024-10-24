using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using WakiBack.DAL;
using WakiBack.Models;

namespace WakiBack.BLL
{
    public class LeagueService : BaseManagerGF, ILeagueService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<MatchService> _logger;
        private readonly IMapper _mapper;


        public LeagueService(IUnitOfWork unitOfWork, ILogger<MatchService> logger, IHttpContextAccessor httpContextAccessor, IMapper mapper) : base(httpContextAccessor)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ShowLeagueAPIVM>> GetAllLeagues()
        {
            var items = await _unitOfWork.Leagues.GetAllAsync();

            return _mapper.Map<IEnumerable<ShowLeagueAPIVM>>(items);
        }

    }
}