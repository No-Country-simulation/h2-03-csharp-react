
using System.ComponentModel.DataAnnotations;


namespace WakiBack.Models
{
    public class ChangePasswordRequestVM
    {
        [Required]
        public string? CurrentPassword { get; set; }
        [Required]
        public string? NewPassword { get; set; }
    }
}
