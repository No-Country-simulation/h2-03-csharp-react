

namespace WakiBack.Models
{
    public class TeamsAPI
    {
        public int? Id { get; set; }       
        public int? HomeAPIId { get; set; }
        public HomeAPI? HomeAPI { get; set; } // Equipo local
        public int? AwayAPIId { get; set; }
        public AwayAPI? AwayAPI { get; set; } // Equipo visitante

    }
}
