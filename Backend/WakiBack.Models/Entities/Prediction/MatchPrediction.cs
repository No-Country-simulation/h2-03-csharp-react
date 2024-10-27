

using Microsoft.EntityFrameworkCore;

namespace WakiBack.Models
{
    public class MatchPrediction : IAuditEntity, IPublicKeyEntity
    {
        public int Id { get; set; }
        public int? BetId { get; set; }
        public Bet? Bet { get; set; }
        public int? MatchId { get; set; }
        public MatchAPI? Match { get; set; }
        public Guid? MatchPublicKey { get; set; }        
        public string? WinnerPrediction { get; set; } //home, draw, away
        public string? WinPrediction { get; set; } //tbd, win, lose
        public string? OverUnderScorePrediction {  get; set; }        
        public double? RatioOfPrediction { get; set; }
       
        #region IPublicKeyEntity
        public Guid EntityPublicKey { get; set; }
        #endregion        

        #region IAuditEntity
        public DateTime Created { get; set; }
        public int CreatedBy { get; set; }
        public DateTime Modified { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime? Deleted { get; set; }
        public int? DeletedBy { get; set; }
        public DateTime? Locked { get; set; }
        public int? LockedBy { get; set; }
        #endregion

    }
}
