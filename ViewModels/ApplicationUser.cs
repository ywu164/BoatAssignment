using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assn2.ViewModels
{
    public class ApplicationUser : IdentityUser
    {       
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Country { get; set; }
        public string MobileNumber { get; set; }
    }
}
