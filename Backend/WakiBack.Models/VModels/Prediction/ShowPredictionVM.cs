

namespace WakiBack.Models
{
    public class ShowPredictionVM
    {
        public DateTime DateFirstBetOfDay { get; set; } // every 24 hours is new prediction for every customer
        public int CountBets { get; set; }
        public int CountFutureBets { get; set; }
        public List<ShowBetVM>? BetList { get; set; }    
        #region IPublicKeyEntity
        public Guid EntityPublicKey { get; set; }
        #endregion        
    }

}