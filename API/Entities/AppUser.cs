using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; } // Our Primary key, automatically updates when a new record is added
        public string UserName { get; set; }

        
    }
}