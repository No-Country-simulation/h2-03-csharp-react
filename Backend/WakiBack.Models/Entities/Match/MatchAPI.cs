
namespace WakiBack.Models
{
    public class MatchAPI : IAuditEntity, IPublicKeyEntity, IDisplayNameEntity, IIdentifierEntity
    {
        public int Id { get; set; }
        public int? MatchId { get; set; }
        public string? Date { get; set; }        
        public StageAPI? StageAPI { get; set; }
        public string? Home { get; set; }
        public string? Away { get; set; }
        public string? Winner { get; set; } //tbd or home, draw, away        
        public int? OddsApiId { get; set; }
        public OddsAPI? OddsAPI { get; set; }
        public int? HomeFtGoals { get; set; } //FullTime Goals
        public int? AwayFtGoals { get; set; }

        public string? DisplayName
        {
            get => Date; // Retorna el valor de Name
            set => Date = value; // Asigna el valor de DisplayName a Name
        }
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
