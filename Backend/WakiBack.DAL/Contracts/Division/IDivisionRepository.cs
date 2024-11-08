using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WakiBack.Models;


namespace WakiBack.DAL
{
    public interface IDivisionRepository: IRepository<CustomerEF>
    {
        Task<CustomerEF?> GetByUserEmailAsync(string email);
        // Task<CustomerEF?> GetByPublicKeyAsync(string id, bool fullCustomer);

    }
}
