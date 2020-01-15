using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inside_airbnb_ricky_broers.Models
{
    public class ListingDetails
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Hostname { get; set; }

        public string RoomType { get; set; }

        public string Neighbourhood { get; set; }

//        public string Price { get; set; }

        public int? ReviewScoresRating { get; set; }
    }
}
