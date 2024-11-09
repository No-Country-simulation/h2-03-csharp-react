


namespace WakiBack.Models
{
    public class Prediction : IAuditEntity, IPublicKeyEntity
    {
        public int Id { get; set; }
        public DateTime DateFirstBetOfDay { get; set; } // every 24 hours is new prediction for every customer
        public int? CustomerEFId { get; set; }
        public virtual CustomerEF? CustomerEF { get; set; }
        public int CountBets { get; set; } = 0;
        public int CountFutureBets { get; set; } = 0;
        public List<Bet>? BetList { get; set; }
        public bool ExistPreviously {  get; set; }
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
