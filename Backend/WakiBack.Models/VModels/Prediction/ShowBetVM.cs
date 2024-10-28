


namespace WakiBack.Models
{
    public class ShowBetVM
    {
        public List<ShowMatchPredictionVM>? ListMatch { get; set; }
        private double? _ratioOfPredictionCombined; 

        public double? RatioOfPredictionCombined
        {
            get => _ratioOfPredictionCombined; 
            set => _ratioOfPredictionCombined = value.HasValue ? Math.Round(value.Value, 2) : (double?)null; 
        }

        public double? PointsPredictionCombined
        {
            get
            {                
                return RatioOfPredictionCombined.HasValue && ListMatch != null && ListMatch.Count > 1
                    ? Math.Ceiling( RatioOfPredictionCombined.Value * 10 * ListMatch.Count)
                    : Math.Ceiling( RatioOfPredictionCombined!.Value * 10);
            }
        }
        public bool? CheckforWin { get; set; }
        public string? Win { get; set; } //"tbd", "win" or "lose"
    }
}
