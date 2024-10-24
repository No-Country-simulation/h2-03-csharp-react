namespace WakiBack.Models
{
    public class ShowStageAPIVM : BaseViewModel
    {
        public string? Name { get; set; }
        public string? IsActive { get; set; }
        public int? LeagueAPIId { get; set; }
        public  ShowLeagueAPIVM? LeagueAPI { get; set; }
    }
}
