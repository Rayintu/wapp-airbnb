﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using inside_airbnb_ricky_broers.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
    }
}
