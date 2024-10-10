using WakiBack.Models;


namespace WakiBack.DAL
{

    public class ContactRepository : Repository<ContactEF>, IContactRepository
    {
        private WebAppContext _appContext;
        public ContactRepository(WebAppContext appContext) : base(appContext)
        {
            _appContext = appContext;
        }
        public void Update(ContactEF updatedContact)
        {
            _appContext.Contacts!.Update(updatedContact);
        }
    }
}