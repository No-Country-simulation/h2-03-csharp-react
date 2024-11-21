using Microsoft.EntityFrameworkCore;
using WakiBack.Models;


namespace WakiBack.DAL
{
    public class DivisionRepository : Repository<CustomerEF>, IDivisionRepository
    {
        private WebAppContext _appContext;
        public DivisionRepository(WebAppContext appContext) : base(appContext)
        {
            _appContext = appContext;
        }

        public async Task<CustomerEF?> GetByUserEmailAsync(string email)
        {
            return await _appContext
            .Customers!
            .Include(e => e.User)
            .Include(e => e.User.Contact)
            .Where(e => e.User.Email == email)
            .FirstOrDefaultAsync();
        }

        //public async Task<CustomerEF?> GetByPublicKeyAsync(string id, bool fullCustomer)
        //{
        //    var publicKey = Guid.Parse(id);

        //    IQueryable<CustomerEF> command = _appContext
        //        .Customers!;

        //    if (fullCustomer)
        //    {
        //        command = command
        //        .Include(e => e.User)
        //        .Include(e => e.User.Contact);
        //    }

        //    command = command.Where(e => e.EntityPublicKey == publicKey);

        //    return await command.FirstOrDefaultAsync();
        //}
    }
}
