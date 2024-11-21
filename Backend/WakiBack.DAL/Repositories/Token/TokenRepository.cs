
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using WakiBack.Models;

namespace WakiBack.DAL
{
    public class TokenRepository(WebAppContext appContext) : PaginatedRepository<TokenEntity>(appContext), ITokenRepository
    {
        private readonly WebAppContext _appContext = appContext;


        public async Task<IEnumerable<TokenEntity>> GetAllTokensPaginated(PaginationVM<TokenEntity, ShowTokenVM> model)
        {
            var isDisplay = typeof(MatchAPI).GetInterfaces().Contains(typeof(IDisplayNameEntity));

            if (!isDisplay) throw new Exception("Entity must implement IDisplayNameEntity");

            var isAuditable = typeof(MatchAPI).GetInterfaces().Contains(typeof(IAuditEntity));

            if (!isAuditable) throw new Exception("Entity must implement IAuditEntity");

            var isIdentifier = typeof(MatchAPI).GetInterfaces().Contains(typeof(IIdentifierEntity));

            if (!isIdentifier) throw new Exception("Entity must implement IIdentifierEntity");

            var isModelValid = model.PageNumber.HasValue && model.PageSize.HasValue;

            if (!isModelValid) throw new Exception("Page and size must have value");

            int page = model.PageNumber != null ? model.PageNumber.Value : 0;
            int size = model.PageSize != null ? model.PageSize.Value : 0;

            int skip = (page - 1) * size;

            IQueryable<TokenEntity> command = dbSet;

            if (!String.IsNullOrEmpty(model.SearchString))
            {
                command = command
                .Where(e => e.Deleted == null && EF.Functions.Like(e.DisplayName!, "%" + model.SearchString + "%") && EF.Functions.Like(e.EntityPublicKey!.ToString(), "%" + model.SearchString + "%"))                        
                .Skip(skip)
                .Take(size)
                .OrderBy(e => e.Id);
            }
            else
            {
                command = command
                .Where(e => e.Deleted == null)                
                .Skip(skip)
                .Take(size)
                .OrderBy(e => e.Id);
            }

            return await command.ToListAsync();
        }
    }

           
}

