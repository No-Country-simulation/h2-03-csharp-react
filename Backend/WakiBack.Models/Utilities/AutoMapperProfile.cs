using AutoMapper;


namespace WakiBack.Models;
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<ShowCustomerDataVM, CustomerEF>().ReverseMap();
            CreateMap<ShowMatchAPIVM, MatchAPI>().ReverseMap();
            CreateMap<ShowStageAPIVM, StageAPI>().ReverseMap();
            CreateMap<ShowLeagueAPIVM, LeagueAPI>().ReverseMap();
            CreateMap<ShowOddsAPIVM, OddsAPI>().ReverseMap();

        }
    }

