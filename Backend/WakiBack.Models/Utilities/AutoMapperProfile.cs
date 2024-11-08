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
            CreateMap<ShowDataDivisionVM, CustomerEF>().ReverseMap();


        CreateMap<Prediction, ShowPredictionVM>()
            .ForMember(dest => dest.BetList, opt => opt.MapFrom(src => src.BetList))
            .ForMember(dest => dest.CountBets, opt => opt.MapFrom(src => src.CountBets))
            .ForMember(dest => dest.DateFirstBetOfDay, opt => opt.MapFrom(src => src.DateFirstBetOfDay))
            .ForMember(dest => dest.EntityPublicKey, opt => opt.MapFrom(src => src.EntityPublicKey));

            CreateMap<Bet, ShowBetVM>()
            .ForMember(dest => dest.ListMatch, opt => opt.MapFrom(src => src.ListMatch))
            .ForMember(dest => dest.RatioOfPredictionCombined, opt => opt.MapFrom(src => src.RatioOfPredictionCombined));

            CreateMap<MatchPrediction, ShowMatchPredictionVM>()
            .ForMember(dest => dest.Match, opt => opt.MapFrom(src => src.Match))
            .ForMember(dest => dest.MatchPublicKey, opt => opt.MapFrom(src => src.MatchPublicKey))
            .ForMember(dest => dest.WinnerPrediction, opt => opt.MapFrom(src => src.WinnerPrediction))
            .ForMember(dest => dest.RatioOfPrediction, opt => opt.MapFrom(src => src.RatioOfPrediction))
            .ForMember(dest => dest.EntityPublicKey, opt => opt.MapFrom(src => src.EntityPublicKey));

        }
    }

