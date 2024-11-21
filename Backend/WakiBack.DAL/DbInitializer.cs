using WakiBack.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Data;
using WakiBack.DAL;
using System.Diagnostics.Contracts;

namespace WakiBack.DAL
{
    public class DbInitializer : IDbInitializer
    {
        private readonly UserManager<UserEF> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly WebAppContext _webAppContext;

        public DbInitializer(UserManager<UserEF> userManager, RoleManager<Role> roleManager, WebAppContext webAppContext)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _webAppContext = webAppContext;
        }

        public void Initialize()
        {
            // Apply migrations if they are not applied
            if (_webAppContext.Database.GetPendingMigrations().Count() > 0)
            {
                _webAppContext.Database.Migrate();
            }

            // Create roles if they are not created

            if (!_roleManager.RoleExistsAsync(UserRole.Dev.ToString()).GetAwaiter().GetResult())
            {
                // Create all roles
                _roleManager.CreateAsync(new Role(UserRole.Dev.ToString())).GetAwaiter().GetResult();
                _roleManager.CreateAsync(new Role(UserRole.Customer.ToString())).GetAwaiter().GetResult();
                _roleManager.CreateAsync(new Role(UserRole.Test.ToString())).GetAwaiter().GetResult();
                _roleManager.CreateAsync(new Role(UserRole.Admin.ToString())).GetAwaiter().GetResult();

                InitialData();
            }
        }

        private void InitialData()
        {

            #region Dev member
            // If roles are not createad, then we will create admin user as well
            var email = "rodridev@outlook.com";
            var dateNow = DateTime.Now;

            var contact = new ContactEF
            {
                FirstName = "Rodrigo",
                FirstLastName = "Kohnen",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            // Password hash: AQAAAAEAACcQAAAAEIJ7Rv2vR7F6tKMWXaWME0t9if+RqXU0mSUmo58ulhjDHrft/jN2mztwRTkk3KmRqg==
            var user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            email = "test@test.com";

            contact = new ContactEF
            {
                FirstName = "Test",
                FirstLastName = "User",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            user = new UserEF
            {
                Email = email,
                Contact = contact,
                UserName = email,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Test1234!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Test.ToString()).GetAwaiter().GetResult();                              
            

            email = "pedro@rodridev.net";

            contact = new ContactEF
            {
                FirstName = "Pedro",
                FirstLastName = "Ruiz",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            user = new UserEF
            {
                Email = email,
                Contact = contact,
                UserName = email,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "ASDAXCVx21!").GetAwaiter().GetResult();
            
            _userManager.AddToRoleAsync(user, UserRole.Admin.ToString()).GetAwaiter().GetResult();

            email = "admin@example.com";
            dateNow = DateTime.Now;

            contact = new ContactEF
            {
                FirstName = "admin",
                FirstLastName = "Admin",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            // Password hash: AQAAAAEAACcQAAAAEIJ7Rv2vR7F6tKMWXaWME0t9if+RqXU0mSUmo58ulhjDHrft/jN2mztwRTkk3KmRqg==
            user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            #endregion
            #region Customer  Silver

            //1
            email = "LucasH22@outlook.com";
            dateNow = DateTime.Now;

            var contact1 = new ContactEF
            {
                FirstName = "Marcos",
                FirstLastName = "Burgos",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact1.FullName;
            SetSecurityDefaults(contact1, dateNow, true);

            user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact1,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);
            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();
            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            var customer4 = new CustomerEF
            {
                User = user,
                Points = 245,
                NameUser = "BurgosM",
                typeDivision = Division.unassigned
            };

            SetSecurityDefaults(customer4, dateNow, true);
            _webAppContext.Customers!.Add(customer4);

            //2
            email = "pepegrillo@outlook.com";
            dateNow = DateTime.Now;

            var contact2 = new ContactEF
            {
                FirstName = "Pepe",
                FirstLastName = "Grillo",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact2.FullName;
            SetSecurityDefaults(contact2, dateNow, true);

            user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact2,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);
            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();
            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            var customer5 = new CustomerEF
            {
                User = user,
                Points = 210,
                NameUser = "pepeelgrilloNN",
                typeDivision = Division.unassigned
            };

            SetSecurityDefaults(customer5, dateNow, true);
            _webAppContext.Customers!.Add(customer5);

            //3
            email = "FrancoP123@outlook.com";
            dateNow = DateTime.Now;

            var contact3 = new ContactEF
            {
                FirstName = "Mateo",
                FirstLastName = "Perez",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact3.FullName;
            SetSecurityDefaults(contact3, dateNow, true);

            user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact3,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);
            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();
            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            var customer6 = new CustomerEF
            {
                User = user,
                Points = 250,
                NameUser = "Mateoo33",
                typeDivision = Division.unassigned
            };

            SetSecurityDefaults(customer6, dateNow, true);
            _webAppContext.Customers!.Add(customer6);

            #endregion        
            #region Customer Bronze

            email = "juliandev@outlook.com";
            dateNow = DateTime.Now;

            contact = new ContactEF
            {
                FirstName = "Julian",
                FirstLastName = "Torres",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            // Password hash: AQAAAAEAACcQAAAAEIJ7Rv2vR7F6tKMWXaWME0t9if+RqXU0mSUmo58ulhjDHrft/jN2mztwRTkk3KmRqg==
            user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            var customer = new CustomerEF
            {
                User = user,
                Points = 55,
                NameUser = "JulianNickName",
                typeDivision = Division.unassigned

            };



            SetSecurityDefaults(customer, dateNow, true);

            _webAppContext.Customers!.Add(customer);

            email = "EzequielFernandez@outlook.com";
            dateNow = DateTime.Now;

            contact = new ContactEF
            {
                FirstName = "Ezequiel",
                FirstLastName = "Fernandez",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            // Password hash: AQAAAAEAACcQAAAAEIJ7Rv2vR7F6tKMWXaWME0t9if+RqXU0mSUmo58ulhjDHrft/jN2mztwRTkk3KmRqg==
            user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            customer = new CustomerEF
            {
                User = user,
                Points = 120,
                NameUser = "EzeFernandez",
                typeDivision = Division.unassigned

            };



            SetSecurityDefaults(customer, dateNow, true);

            _webAppContext.Customers!.Add(customer);



            email = "AlexGarcia@outlook.com";
            dateNow = DateTime.Now;

            contact = new ContactEF
            {
                FirstName = "Alex",
                FirstLastName = "Garcia",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            // Password hash: AQAAAAEAACcQAAAAEIJ7Rv2vR7F6tKMWXaWME0t9if+RqXU0mSUmo58ulhjDHrft/jN2mztwRTkk3KmRqg==
            user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            customer = new CustomerEF
            {
                User = user,
                Points = 65,
                NameUser = "AlexGG",
                typeDivision = Division.unassigned

            };



            SetSecurityDefaults(customer, dateNow, true);

            _webAppContext.Customers!.Add(customer);

            #endregion

            #region Customer Gold


            email = "jfQuintero@outlook.com";
            dateNow = DateTime.Now;

            contact = new ContactEF
            {
                FirstName = "Juan Fernando",
                FirstLastName = "Quintero",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            // Password hash: AQAAAAEAACcQAAAAEIJ7Rv2vR7F6tKMWXaWME0t9if+RqXU0mSUmo58ulhjDHrft/jN2mztwRTkk3KmRqg==
            user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            var customer1 = new CustomerEF
            {
                User = user,
                Points = 912,
                NameUser = "Quintero912",
                typeDivision = Division.unassigned
            };



            SetSecurityDefaults(customer1, dateNow, true);

            _webAppContext.Customers!.Add(customer1);



            email = "LucasH22@outlook.com";
            dateNow = DateTime.Now;

            contact = new ContactEF
            {
                FirstName = "Lucas",
                FirstLastName = "Hernandez",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            // Password hash: AQAAAAEAACcQAAAAEIJ7Rv2vR7F6tKMWXaWME0t9if+RqXU0mSUmo58ulhjDHrft/jN2mztwRTkk3KmRqg==
            user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            var customer2 = new CustomerEF
            {
                User = user,
                Points = 420,
                NameUser = "LucasHH",
                typeDivision = Division.unassigned

            };

            SetSecurityDefaults(customer2, dateNow, true);

            _webAppContext.Customers!.Add(customer2);


            email = "FrancoP123@outlook.com";
            dateNow = DateTime.Now;

            contact = new ContactEF
            {
                FirstName = "Franco",
                FirstLastName = "Pereyra",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            // Password hash: AQAAAAEAACcQAAAAEIJ7Rv2vR7F6tKMWXaWME0t9if+RqXU0mSUmo58ulhjDHrft/jN2mztwRTkk3KmRqg==
            user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            var customer3 = new CustomerEF
            {
                User = user,
                Points = 460,
                NameUser = "AlexGG",
                typeDivision = Division.unassigned

            };



            SetSecurityDefaults(customer3, dateNow, true);

            _webAppContext.Customers!.Add(customer3);


            #endregion

            


            #region Customer 0points

            email = "npcjuan@outlook.com";
            dateNow = DateTime.Now;

            contact = new ContactEF
            {
                FirstName = "Juan",
                FirstLastName = "Pedro",
                ContactTypeId = (int)ContactType.Person,
                IsMainContact = true,
            };

            contact.DisplayName = contact.FullName;

            SetSecurityDefaults(contact, dateNow, true);

            // Password hash: AQAAAAEAACcQAAAAEIJ7Rv2vR7F6tKMWXaWME0t9if+RqXU0mSUmo58ulhjDHrft/jN2mztwRTkk3KmRqg==
            user = new UserEF
            {
                Email = email,
                UserName = email,
                Contact = contact,
                EmailConfirmed = true,
                LoginTypeId = (int)LoginType.Email,
            };

            SetSecurityDefaults(user, dateNow, true);

            _userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();

            _userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            var customer7= new CustomerEF
            {
                User = user,
                Points = 0,
                NameUser = "JuanNPC",
                typeDivision = Division.unassigned
            };



            SetSecurityDefaults(customer7, dateNow, true);

            _webAppContext.Customers!.Add(customer7);

            #endregion

            #region Customer notpoint assing

            //email = "luisjuarez@outlook.com";
            //dateNow = DateTime.Now;

            //contact = new ContactEF
            //{
            //    FirstName = "Luis",
            //    FirstLastName = "Juarez",
            //    ContactTypeId = (int)ContactType.Person,
            //    IsMainContact = true,
            //};

            //contact.DisplayName = contact.FullName;

            //SetSecurityDefaults(contact, dateNow, true);

            //// Password hash: AQAAAAEAACcQAAAAEIJ7Rv2vR7F6tKMWXaWME0t9if+RqXU0mSUmo58ulhjDHrft/jN2mztwRTkk3KmRqg==
            //user = new UserEF
            //{
            //    Email = email,
            //    UserName = email,
            //    Contact = contact,
            //    EmailConfirmed = true,
            //    LoginTypeId = (int)LoginType.Email,
            //};

            //SetSecurityDefaults(user, dateNow, true);

            //_userManager.CreateAsync(user, "Admin123!").GetAwaiter().GetResult();

            //_userManager.AddToRoleAsync(user, UserRole.Dev.ToString()).GetAwaiter().GetResult();

            //customer = new CustomerEF
            //{
            //    User = user,
            //    NameUser = "LuisitoComunica",
            //};

            //SetSecurityDefaults(customer, dateNow, true);

            //_webAppContext.Customers!.Add(customer);

            #endregion

            _webAppContext.SaveChanges();
        }





        private void SetSecurityDefaults(IAuditEntity entity, DateTime dateNow, bool setPublicKey = false, int createdBy = 1)
        {
            entity.Created = dateNow;
            entity.CreatedBy = createdBy;
            entity.Modified = dateNow;
            entity.ModifiedBy = createdBy;
            if (setPublicKey)
            {
                if (entity is IPublicKeyEntity)
                {
                    var entityPublicKey = entity as IPublicKeyEntity;
                    if (entityPublicKey != null)
                    {
                        var newGuid = Guid.Parse("00000000-0000-0000-0000-000000000000");

                        if (entityPublicKey.EntityPublicKey.Equals(newGuid))
                        {
                            entityPublicKey.EntityPublicKey = Guid.NewGuid();
                        }
                    }
                }
            }
        }
    }

}


