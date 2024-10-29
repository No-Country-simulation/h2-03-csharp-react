



namespace WakiBack.Models
{
    public class ShowMatchPredictionVM
    {
        public ShowMatchAPIVM? Match { get; set; }
        public Guid? MatchPublicKey { get; set; }
        public string? WinnerPrediction { get; set; } //home, draw, away                
        public string? WinPrediction { get; set; } //tbd, win, lose
        public double? RatioOfPrediction { get; set; }        
        public Guid EntityPublicKey { get; set; }
        public double? PointsPrediction
        {
            get
            {
                return RatioOfPrediction.HasValue
                    ? Math.Ceiling(RatioOfPrediction.Value * 10)
                    : null;
            }
        }

    }
}
