using WakiBack.Models;


namespace WakiBack.DAL
{
    public interface IContactRepository : IRepository<ContactEF>
    {
        void Update(ContactEF contactEF);
    }


}
