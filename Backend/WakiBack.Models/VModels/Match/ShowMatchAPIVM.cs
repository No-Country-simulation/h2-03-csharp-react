

namespace WakiBack.Models
{
    public class ShowMatchAPIVM : BaseViewModel, IPublicKeyEntity
    {                
        public string? Date { get; set; }        
        public ShowStageAPIVM? StageAPI { get; set; }
        public ShowTeamsAPIVM? TeamsAPI { get; set; }
        public string? Winner { get; set; } //tbd or home, draw, away                                                 
        public ShowOddsAPIVM? OddsAPI { get; set; }
        public int? HomeFtGoals { get; set; } //FullTime Goals
        public int? AwayFtGoals { get; set; }    

        #region IPublicKeyEntity
        public Guid EntityPublicKey { get; set; }
        #endregion  
    }
}
