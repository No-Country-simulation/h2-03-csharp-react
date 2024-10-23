

namespace WakiBack.Models
{
    public class StageAPI
    {
        public int? Id { get; set; }
        public int? StageId { get; set; }
        public string? Name { get; set; }
        public string? IsActive { get; set; }
        public int? LeagueAPIId { get; set; }
        public virtual LeagueAPI? LeagueAPI { get; set; }
        public List<MatchAPI>? MatchList { get; set; }
    }
}
