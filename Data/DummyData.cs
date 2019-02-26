using Assn2.ViewModels;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assn2.Data
{
    public class DummyData
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<ApplicationDbContext>();
                context.Database.EnsureCreated();
                //context.Database.Migrate();

                // Look for any ailments
                if (context.Boats != null && context.Boats.Any())
                    return;   // DB has already been seeded

                var boats = GetBoats().ToArray();
                context.Boats.AddRange(boats);
                context.SaveChanges();

            }
        }

        public static List<Boat> GetBoats()
        {
            List<Boat> boats = new List<Boat>() {
            new Boat {BoatId=1, BoatName="First", Picture="F", LengthInFeet=100, Description="Fast", Make="Honda"},
            new Boat {BoatId=2, BoatName="Second", Picture="S", LengthInFeet=200, Description="Speed", Make="Toyota"},
            new Boat {BoatId=3, BoatName="Third", Picture="T", LengthInFeet=300, Description="Thirsty", Make="BMW"},
            new Boat {BoatId=4, BoatName="Fourth", Picture="F", LengthInFeet=400, Description="Furious", Make="Porsche"},
            new Boat {BoatId=5, BoatName="Fifth", Picture="F", LengthInFeet=500, Description="Fire", Make="Ferrari"}
            };
            return boats;
        }
    }
}
