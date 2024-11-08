using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WakiBack.BLL;
using WakiBack.DAL;
using WakiBack.Models;


namespace WakiBack.BLL
{
    public class DivisionService : IDivisionService
    {
         
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public DivisionService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        public async Task<IEnumerable<ShowDataDivisionVM>> GetDivisionsByProfile(string userEmail)
        {
            var customerProfile = await _unitOfWork.Customers.GetByUserEmailAsync(userEmail);
            if (customerProfile is null) throw new Exception("Customer not found");


            int points = customerProfile.Points ?? 0;
            Division division = Division.unassigned;


            if (points > 350)
            {
                division = Division.gold;
            }
            else if (points > 200)
            {
                division = Division.silver;
            }
            else if (points > 50)
            {
                division = Division.bronze;
            }

            var allCustomers = await _unitOfWork.Customers.GetAllAsync();

            var customersInSameDivision = allCustomers
             .Where(c =>
                 (c.Points > 350 && division == Division.gold) ||
                 (c.Points > 200 && c.Points <= 350 && division == Division.silver) ||
                 (c.Points > 50 && c.Points <= 200 && division == Division.bronze))
             .ToList();

            return _mapper.Map<IEnumerable<ShowDataDivisionVM>>(customersInSameDivision);
        }

        public async Task<IEnumerable<ShowDataDivisionVM>> GetDivisionsAndAssignAsync()
        {

            var Listcustomers = await _unitOfWork.Customers.GetAllAsync();
            var ListcustomersOrder = Listcustomers.OrderByDescending(u => u.Points).ToList();

            
            for (int i = 0; i < ListcustomersOrder.Count; i++)
            {
                Division division = Division.unassigned;  

                if (ListcustomersOrder[i].Points > 350)
                {
                    division = Division.gold;
                }
                else if (ListcustomersOrder[i].Points > 200)
                {
                    division = Division.silver;
                }
                else if (ListcustomersOrder[i].Points > 50)
                {
                    division = Division.bronze;
                }

                ListcustomersOrder[i].typeDivision = division;
            }
            await _unitOfWork.SaveAsync();
            var result = _mapper.Map<List<ShowDataDivisionVM>>(ListcustomersOrder);

            return result;
        }
        public async Task<List<ShowDataDivisionVM>> GetAllCustomersAsync()
        {
            var customerProfile = await _unitOfWork.Customers.GetAllAsync();

            if (customerProfile is null || !customerProfile.Any())
                throw new Exception("Customer not found");

            return _mapper.Map<List<ShowDataDivisionVM>>(customerProfile);
        }
    }
}
