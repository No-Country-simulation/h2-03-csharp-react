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
            CreateMap<ShowTeamAPIVM, TeamAPI>().ReverseMap();
            CreateMap<ShowTeamsAPIVM, TeamsAPI>().ReverseMap();
            CreateMap<ShowAwayAPIVM, AwayAPI>().ReverseMap();
            CreateMap<ShowHomeAPIVM, HomeAPI>().ReverseMap();
            CreateMap<ShowCountryVM, CountryAPI>().ReverseMap();
            CreateMap<ShowPredictionVM, Prediction>().ReverseMap();
            CreateMap<ShowBetVM, Bet>().ReverseMap();
            CreateMap<ShowMatchPredictionVM, MatchPrediction>().ReverseMap();
            CreateMap<ShowTokenVM, TokenEntity>().ReverseMap();
            CreateMap<CreateTokenVM, TokenEntity>().ReverseMap();

        }
    }

