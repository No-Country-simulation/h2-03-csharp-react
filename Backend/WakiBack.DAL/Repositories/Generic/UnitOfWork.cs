﻿using WakiBack.Models;

namespace WakiBack.DAL
{
    public interface IUnitOfWork
    {
        IUserRepository Users { get; }
        IContactRepository Contacts { get; }        
        ICustomerRepository Customers { get; }
        ILeagueAPIRepository Leagues { get; }
        IMatchAPIRepository Matches { get; }

        #region Methods
        void Save();
        int AuthSave(string email);
        Task<int> SaveAsync();
        Task<int> AuthSaveAsync(string email);
        void SoftDelete(IAuditEntity auditEntity, string? email = null);
        string GetConnectionString();
        #endregion
    }
    public class UnitOfWork : IUnitOfWork
    {
        private WebAppContext _webAppContext;
        public IUserRepository Users { get; private set; }
        public IContactRepository Contacts { get; private set; }
        public ICustomerRepository Customers { get; private set; }
        public ILeagueAPIRepository Leagues { get; private set; }
        public IMatchAPIRepository Matches { get; private set; }
        public UnitOfWork(WebAppContext webAppContext)
        {
            _webAppContext = webAppContext;
            Users = new UserRepository(webAppContext);
            Contacts = new ContactRepository(webAppContext);
            Customers = new CustomerRepository(webAppContext);     
            Leagues = new LeagueAPIRepository(webAppContext);
            Matches = new MatchAPIRepository(webAppContext);
        }

        #region Methods        
        public void Save()
        {
            _webAppContext.SaveChanges();
        }

        public int AuthSave(string email)
        {
            return _webAppContext.SaveChanges(email);
        }

        public async Task<int> SaveAsync()
        {
            return await _webAppContext.SaveChangesAsync();
        }

        public async Task<int> AuthSaveAsync(string email)
        {
            return await _webAppContext.SaveChangesAsync(email);
        }

        public string GetConnectionString()
        {
            var connectionString = _webAppContext.GetConnectionString();
            if (connectionString is null) throw new Exception("Null connectionString in UnitOfWork GetConnectionString");
            return connectionString;
        }

        public void SoftDelete(IAuditEntity auditEntity, string? email = null)
        {
            _webAppContext.SoftDelete(auditEntity, email);
        }
        #endregion
    }
}