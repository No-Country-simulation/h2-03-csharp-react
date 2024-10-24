using WakiBack.Models;

namespace WakiBack.DAL
{
    public interface ICustomerRepository : IRepository<CustomerEF>
    {
        Task<CustomerEF?> GetByUserEmailAsync(string email);
        Task<CustomerEF?> GetByPublicKeyAsync(string id, bool fullCustomer);
        Task<IEnumerable<CustomerEF>> GetPaginatedStripeCustomers(PaginationVM<CustomerEF> model);
        void Update(CustomerEF updatedCustomer);
    }
}
