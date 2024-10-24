

using AutoMapper;
using WakiBack.DAL;
using WakiBack.Models;

namespace WakiBack.BLL
{ 
    public class CustomerService : ICustomerService
    {        
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CustomerService( IUnitOfWork unitOfWork, IMapper mapper)
        {            
            _unitOfWork = unitOfWork;           
            _mapper = mapper;
        }

        public async Task<ShowCustomerDataVM> GetMyProfileAsync(string userEmail)
        {
            var customerProfile = await _unitOfWork.Customers.GetByUserEmailAsync(userEmail);

            if (customerProfile is null) throw new Exception("Customer not found");

            return _mapper.Map<ShowCustomerDataVM>(customerProfile);
        }


    }
}
