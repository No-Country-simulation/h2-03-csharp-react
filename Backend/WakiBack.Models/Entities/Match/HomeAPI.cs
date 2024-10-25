
namespace WakiBack.Models
{
    public class HomeAPI
    {
        public int? Id { get; set; }
        public int? TeamAPIId { get; set; }
        public TeamAPI? TeamAPI { get; set; }

    }
}
