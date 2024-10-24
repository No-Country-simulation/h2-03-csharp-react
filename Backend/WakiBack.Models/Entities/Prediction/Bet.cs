﻿

using Microsoft.EntityFrameworkCore;

namespace WakiBack.Models
{ 
    public class Bet : IAuditEntity, IPublicKeyEntity
    {
        //usar fecha de creacion como Date para controlar las apuestas diarias
        public int Id { get; set; }        
        public int? PredictionId { get; set; }
        public virtual Prediction? Prediction { get; set; }
        public List<MatchPrediction>? ListMatch { get; set; }
        [Precision(6, 2)]
        public decimal? RatioOfPredictionCombined { get; set; }

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