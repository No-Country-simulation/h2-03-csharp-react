
namespace WakiBack.Models
{
    public class AwayAPI
    {
        public int? Id { get; set; }
        public int? TeamAPIId { get; set; }
        public TeamAPI? TeamAPI { get; set; }

    }
}
