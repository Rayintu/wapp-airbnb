using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using inside_airbnb_ricky_broers.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;

namespace inside_airbnb_ricky_broers.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ListingsController : ControllerBase
    {
        private readonly AirBNBDatabaseContext _dbContext;

        public ListingsController(AirBNBDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("listingLocations")]
        public IEnumerable<ListingLocation> Index()
        {
            var listingLocations = _dbContext.Listings.Select(listing => new ListingLocation
            {
                Id = listing.Id,
                Latitude = listing.Latitude,
                Longitude = listing.Longitude
            }).Take(1000);

            return listingLocations;
        }
        
        [HttpGet("listingLocationsList")]
        public async Task<List<ListingLocation>> IndexList()
        {
            return await _dbContext.Listings.Select(listing => new ListingLocation
            {
                Id = listing.Id,
                Latitude = listing.Latitude,
                Longitude = listing.Longitude
            }).ToListAsync();
        }

        [HttpGet("totalListings")]
        public int GetTotalListings()
        {
            var totalListings = _dbContext.Listings.Select(listing => new ListingLocation()).Count();
            return totalListings;
        }
    }
}
