
using Microsoft.AspNetCore.Identity;

namespace WakiBack.Models
{
    public class Role : IdentityRole<int>
    {

        public Role() : base() { }
        public Role(string roleName) : base(roleName) { }
    }
}
