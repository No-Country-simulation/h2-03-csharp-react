

using RunnersApp.DomainModel;

namespace WakiBack.Models
{
    public class ShowTokenVM
    {
        public string? Name { get; set; }
        public Logros Logros { get; set; }

        public string GetLogrosDescription()
        {
            return Logros.GetEnumDescription();
        }
        public Guid? EntityPublicKey { get; set; }
        public double? Cantidad { get; set; }

    }
}
