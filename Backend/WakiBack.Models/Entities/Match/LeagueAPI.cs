

namespace WakiBack.Models
{
    public class LeagueAPI : IDisplayNameEntity , IAuditEntity, IIdentifierEntity
    {
        public int Id { get; set; }
        public int? LeagueId { get; set; }
        public string? Name { get; set; }
        public int ? CountryAPIId { get; set; }
        public CountryAPI? Country { get; set; }
        public List<StageAPI>? StageList { get; set; }
        public string ? LogoUrl {  get; set; }
        public string? DisplayName
        {
            get => Name; // Retorna el valor de Name
            set => Name = value; // Asigna el valor de DisplayName a Name
        }

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
