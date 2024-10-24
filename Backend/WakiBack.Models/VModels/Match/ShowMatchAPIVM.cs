

namespace WakiBack.Models
{
    public class ShowMatchAPIVM : BaseViewModel, IPublicKeyEntity
    {        
        public int? MatchId { get; set; }
        public string? Date { get; set; }
        public int? StageAPIId { get; set; }
        public ShowStageAPIVM? StageAPI { get; set; }
        public string? Home { get; set; }
        public string? Away { get; set; }
        public string? Winner { get; set; } //tbd or home, draw, away
        public int? OddsAPIId {  get; set; }                                         
        public ShowOddsAPIVM? OddsAPI { get; set; }
        public int? HomeFtGoals { get; set; } //FullTime Goals
        public int? AwayFtGoals { get; set; }
        public int? LeagueId { get; set; }
        public string? LeagueName { get; set; }

        #region IPublicKeyEntity
        public Guid EntityPublicKey { get; set; }
        #endregion  
    }
}
