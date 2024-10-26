
using System.ComponentModel.DataAnnotations;

namespace WakiBack.Models
{
    public class CreateMatchPredictionVM
    {
        [Required(ErrorMessage = "MatchPublicKey is required.")]
        [RegularExpression(@"^(\{)?[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}(\})?$",
        ErrorMessage = "The MatchPublicKey must be a valid GUID.")]
        public Guid? MatchPublicKey { get; set; }
        [Required(ErrorMessage = "WinnerPrediction is required.")]
        [RegularExpression("^(home|draw|away)$", ErrorMessage = "The WinnerPrediction must be 'home', 'draw', or 'away'.")]
        public string? WinnerPrediction { get; set; } //home, draw, away
    }
}
