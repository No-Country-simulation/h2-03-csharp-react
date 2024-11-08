

namespace WakiBack.Models
{
    public class ShowDataDivisionVM: BaseViewModel
    {
        public Guid EntityPublicKey { get; set; }
        public Division? typeDivision { get; set; }
        public int? Points { get; set; }
        public string? NameUser { get; set; }

        //nick name como nombre de usuario ? nameuser
    }
}
