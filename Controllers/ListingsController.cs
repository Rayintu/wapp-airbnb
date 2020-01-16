using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using GeoJSON.Net.Feature;
using GeoJSON.Net.Geometry;
using inside_airbnb_ricky_broers.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

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
        public async Task<string> GetListingLocations()
        {
            var listingLocations = await _dbContext.Listings.Select(listing => new ListingLocation
            {
                Id = listing.Id,
                Latitude = listing.Latitude,
                Longitude = listing.Longitude
            }).ToListAsync();

            string geoJson = convertGeoJson(listingLocations);

            return geoJson;
        }

        private string convertGeoJson(List<ListingLocation> listingLocations)
        {
            var featureCollection = new FeatureCollection();
            foreach (ListingLocation listingLocation in listingLocations)
            {
                listingLocation.Latitude = Double.Parse(
                    listingLocation.Latitude.ToString().Insert(2, "."),
                    CultureInfo.InvariantCulture
                );

                listingLocation.Longitude = Double.Parse(
                    listingLocation.Longitude.ToString().Insert(1, "."),
                    CultureInfo.InvariantCulture
                );

                var point = new Point(new Position(listingLocation.Latitude, listingLocation.Longitude));
                var props = new Dictionary<string, object>
                {
                    {"id", listingLocation.Id}
                };
                var feature = new Feature(point, props);
                featureCollection.Features.Add(feature);
            }

            string serializedJson = JsonConvert.SerializeObject(featureCollection);
            return serializedJson;
        }

        [HttpGet("{id}")]
        public async Task<IEnumerable<ListingDetails>> getListingDetails(int id)
        {
            return await _dbContext.Listings
                .Where(listing => listing.Id == id)
                .Select(listing => new ListingDetails
                {
                    Id = listing.Id, 
                    Name = listing.Name, 
                    Hostname = listing.HostName, 
                    RoomType = listing.RoomType, 
                    Neighbourhood = listing.Neighbourhood, 
//                    Price = listing.Price, 
                    ReviewScoresRating = listing.ReviewScoresRating
                }).ToListAsync();

        }

        [HttpGet("filtered")]
        public async Task<string> getFilteredLocations([FromQuery] int price, [FromQuery] string neighbourhood, [FromQuery] int rating)
        {
            List<ListingLocation> locations;

            if (neighbourhood == "nofilter")
            {
                locations = await _dbContext.Listings.Where(listing => listing.ReviewScoresRating >= rating).Select(listing => new ListingLocation
                {
                    Id = listing.Id,
                    Latitude = listing.Latitude,
                    Longitude = listing.Longitude
                }).ToListAsync();
            }
            else
            {
                locations = await _dbContext.Listings.Where(listing => listing.NeighbourhoodCleansed == neighbourhood && listing.ReviewScoresRating >= rating).Select(listing => new ListingLocation
                {
                    Id = listing.Id,
                    Latitude = listing.Latitude,
                    Longitude = listing.Longitude
                }).ToListAsync();
            }

            

            var geoJson = convertGeoJson(locations);
            return geoJson;
        }

        [HttpGet("neighbourhoods")]
        public async Task<List<string>> getNeighbourhoods()
        {
            return await _dbContext.Neighbourhoods.Select(item => item.Neighbourhood).Distinct().ToListAsync();
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