using RunnersApp.DomainModel;

namespace WakiBack.Models
{
    public class TokenEntity : IAuditEntity, IPublicKeyEntity, IDisplayNameEntity, IIdentifierEntity
    {
        public int Id { get; set; }   
        public string? Name { get; set; }
        public Logros? Logros { get; set; }
        public double? Cantidad { get; set; }

        public string? DisplayName
        {
            get => Name; 
            set => Name = value;
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
