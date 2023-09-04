'use strict';
const { Spot } = require('../models');
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; 
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await Spot.bulkCreate([
      {
        ownerId: 1,
        address: '1912 Ford Dr',
        city: 'Orlando',
        state: 'FL',
        country: 'US',
        lat: 27.235,
        lng: 124.14,
        name: "SummerVille Villa",
        description: 'Summerville Resort is a new and prestigious collection of town-home villas just 5 miles from the entrance to Walt Disney World! Be among the first to stay in this contemporary vacation rental with pristine finishes & amenities. No need to wait in line to shower here; each of the 4 bedrooms has its own attached bath. After a day exploring the parks, come home to indulgence at the Resort, which features a community hot tub, heated pool, fitness center, playground, and a sleek Clubhouse.',
        price: 150,
      },
      {
        ownerId: 1,
        address: '124124 Carmel Lane',
        city: 'Saint Louis',
        state: 'MO',
        country: 'US',
        lat: 257.235,
        lng: 124.14,
        name: "Resort Like Paradise",
        description: "The magic of our Private Villas with Private Pools in the middle of the jungle will captivate your senses and immerse you in a pleasant journey. Surrounded by the beauty that nature offers, your days will be painted in their colors and the sounds of birds, all this in a beautiful boho environment, full of style, comfort and privacy, just 5 minutes driving from Tulum´s town and 15 minutes from its aquamarine coasline",
        price: 450,
      },
     
      {"ownerId": 1, "address": "328 17th Street", "city": "Yucca Valley", "state": "California", "country": "United States", "lat": 35.629985, "lng": -120.702516, "name": "Family Fun in the Desert w/Pool", "description": "Bring the whole family to relax and play in the desert! Whether you are looking for an escape to spend the entire weekend, or a home base while you explore nature you will never want to leave.", "price": 562},
      {"ownerId": 1, "address": "1422 North Dawn Drive", "city": "Indio Hills", "state": "California", "country": "United States", "lat": 36.08123, "lng": -94.167422, "name": "Salt Water Pool/ Spa/ BBQ/ Swim-Up Bar/ Fire Pit", "description": "REMOTE LOCATION.", "price": 894},
      {"ownerId": 1, "address": "3949 Ethan Allen Highway", "city": "Index", "state": "Washington", "country": "United States", "lat": 44.728245, "lng": -73.117943, "name": "The Treeframe Cabin", "description": "The Treeframe is a modern a-frame treehouse that offers an unforgettable short-term rental experience. Located in the heart of the forest and surrounded by nature, our treehouse is the perfect spot for travelers looking for a one-of-a-kind getaway.  Our treehouse is fully equipped with all the amenities you need for a relaxing stay, and Nick is always available to answer any questions you may have. Come discover the beauty of nature and escape the hustle and bustle of city life at The Treeframe!", "price": 995},
      {"ownerId": 1, "address": "435 Granite Street", "city": "Malibu", "state": "California", "country": "United States", "lat": 42.2404974, "lng": -71.01624509999999, "name": "Malibu Mid-Century Modern Luxury retreat home", "description": "Relax in a luxurious 3-story Malibu getaway with spectacular ocean & mountain views. Our newly-built mid-century modern 4 bedroom, 3.5 bath home is nestled in the peaceful Santa Monica mountains just minutes from Southern California's most famous beaches. Enjoy a stylish space and wall to wall open views to the ocean. Every bedroom has ocean views. This truly unique home was custom built and furnished with the greatest attention to detail.", "price": 1755},
      {"ownerId": 1, "address": "5630 Silverado Way", "city": "Atlantic Beach", "state": "North Carolina", "country": "United States", "lat": 61.1695128, "lng": -149.8896842, "name": "5 Star Luxury Sleeps 14 On Beach September SALE!", "description": "NEW CONST 5-STAR LUXURY OCEANFRONT 4-STORY, Elevator, 5 Bed,4.5 Bath SLEEPS 14 PEOPLE Located on \"Millionaire's Row\" Heated Pool,Jacuzzi,Pizza Oven,Beach Chairs & Umbrella,Game Room,Basketball,Gym,Games,Computer & Printer, 70\"TV,Art,Gourmet Kitchen seats 22 people.Stainless Steel Appliances, Gas Oven & Range,Fully Stocked Kitchen:Cooking Utensils, Plates, pots & pans, regular & Keurig K Pods. Dishwasher, High-Speed Internet ROKU,NETFLIX Capability,Washing & Dryer. CPI Security System throughout.", "price": 1837},
      {"ownerId": 1, "address": "701 West 36th Avenue", "city": "Bolivar Peninsula", "state": "Texas", "country": "United States", "lat": 61.18808639999999, "lng": -149.8964384, "name": "*HOT* New Beachfront Home: Beach Girl", "description": "Every day is a Holiday at Beach Girl!  This beachfront home is a 4 bedroom, 3 full bath home tastefully decorated with a coastal flair that sleeps 12 people. Enjoy amazing, unobstructed views of the Gulf Shoreline from both balconies; including, sunrises every morning and listening to the waves as you wind down watching the sunset over the horizon! This coastal oasis has a wide open floor plan, high ceilings, and large rooms full of windows that create a \"sunny\" feel during your visit.", "price": 531},
      {"ownerId": 1, "address": "6 Greenleaf Drive", "city": "Los Angeles County", "state": "California", "country": "United States", "lat": 42.8278778, "lng": -71.0133099, "name": "Luxurious Modern Hills Oasis Gated Estate POOL/SPA", "description": "There's no end to the indoor and outdoor entertainment available at this five-bedroom home in the hills, a beautifully designed, and gated estate with a private pool/spa that can be heated.", "price": 1453},
      {"ownerId": 1, "address": "760 11th Street Southeast", "city": "Jenner", "state": "California", "country": "United States", "lat": 38.879695, "lng": -76.99121, "name": "Sonoma Coast\u2022Arch\u2022Estate\u2022Dramatic Ocean VUs", "description": "Sonoma Coast is a Frank Lloyd Wright inspired modern California Ranch w/ subtle Prairie & International architectural design; perched on a promontory overlooking cove w/ jaw dropping ocean views and mesmerizing - audible crashing white water waves.  Complete with spa, BBQ, dry/wet sauna, chefs kitchen, lux bedding and linens, Le Creuset crockery, Mauviel stainless steel cookware, Viking appliances, Wolf small kitchen appliances, Jura Espresso Machine with frother, WIFI, streaming Roku & Alexa .", "price": 2156},
      {"ownerId": 1, "address": "175 Creek Road", "city": "Summerton", "state": "South Carolina", "country": "United States", "lat": 43.6055996, "lng": -73.2336737, "name": "Ultimate Lake Marion Dream Home", "description": "Welcome to the White House! Experience peace and tranquillity like never before in this exquisite home nestled along the shores of Lake Marion. Boasting 4 spacious bedrooms and 3.5 bathrooms, the whole family can enjoy ample space and luxury. Featuring an incredible private infinity pool, swim spa, chefs kitchen, private dock, gas grill, HDTV's in almost every room, and a master suite that is second to none. Hosted by Lake Marion Luxury Vacations and Concierge.", "price": 499},
      {"ownerId": 1, "address": "103 Fenwick Village Drive", "city": "Lexington", "state": "Michigan", "country": "United States", "lat": 32.0244412, "lng": -81.23017689999999, "name": "Beachfront, kayaks, 3 min to Lex", "description": "You cannot beat the views of this updated, close to downtown home situated on 135' of private beach for you to enjoy with your friends and family. Wake up early and enjoy your morning coffee while watching the magnificent sunrise from inside or on one of the home's two decks. ", "price": 1832},
      {"ownerId": 1, "address": "632 North Pine Street", "city": "Kissimmee", "state": "Florida", "country": "United States", "lat": 61.22930220000001, "lng": -149.7938547, "name": "Elegant Mega Mansion with Laser Tag Arena and Tree House Camp at Reunion", "description": "First Floor:", "price": 750},
      {"ownerId": 1, "address": "2507 R Street Southeast", "city": "Freedom", "state": "California", "country": "United States", "lat": 38.869211, "lng": -76.970202, "name": "Old Amesti Schoolhouse mid-bay amidst farmland", "description": "This 100 year old school house surrounded by organic farms in the Pajaro Valley is a great starting point for your adventures in the Monterey Bay. From here you can reach Santa Cruz to the North or Monterey to the south  in 30 minutes.  When you are finished sightseeing come back to this comfortable home.  A major renovation was recently completed to update the electrical, heating and plumbing yet preserving as much of the past as possible.  Outside enjoy the pool, spa or game areas.", "price": 1165},
      {"ownerId": 1, "address": "4971 Janet Court", "city": "Davenport", "state": "Florida", "country": "United States", "lat": 37.6841886, "lng": -121.7340865, "name": "Mini Golf, 5xThemed Bedrooms, Sauna, Space Theater", "description": "*** VIDEO TOUR AVAILABLE ON YOUTUBE @elementvacationhomes ***", "price": 655},
      {"ownerId": 1, "address": "25793 Durrwood Court", "city": "Santa Cruz", "state": "California", "country": "United States", "lat": 37.6788246, "lng": -122.0341169, "name": "Ls1 Alpine Zen Estate", "description": "Welcome to our peaceful zen retreat, minutes from Santa Cruz Beaches & Parks! Surrounded by majestic mountains and redwood views, our spacious home offers tranquility and privacy in nature. Relax in a rejuvenating sauna, soothing hot tub, and a refreshing swimming pool. This serene getaway is the perfect place to disconnect from the busy world or connect to it and work remotely . ", "price": 1369},
      {"ownerId": 1, "address": "1635 Generals Highway", "city": "Woodbury", "state": "Connecticut", "country": "United States", "lat": 39.0139641, "lng": -76.5724717, "name": "Luxurious Litchfield County Summer Estate", "description": "This is an exceptional country estate less than 2 hours from NYC. With a US Open grade tennis court, gunnite salt water pool and expansive 10 acre grounds, guests will enjoy an ultimate summer escape in an idyllic Litchfield County setting. This luxury home was gut renovated in 2022 and features 4 spacious bedrooms (master with ensuite + walk in closet), a large office, and 2.5 luxurious baths. It is ideally located just a 15 minute drive from the towns of Washington Depot, Roxbury and Woodbury.", "price": 2062},
      {"ownerId": 1, "address": "3824 Rosewood Court", "city": "Malibu", "state": "California", "country": "United States", "lat": 35.4798788, "lng": -97.39408019999999, "name": "EAGLE'S WATCH MALIBU- Architectural w/ Ocean View", "description": "Eagle's Watch is one of Malibu's most famous houses, impossible to miss while driving the Pacific Coast Highway and designed by legendary architect Harry Gesner. Perched above the Pacific Ocean, Eagle\u2019s Watch has the best unobstructed panoramic view in Malibu. Perfect for entertaining with dramatic outdoor and indoor spaces, the views from every location are simply stunning. Stay in ultimate luxury in this one of a kind serene modern marvel.", "price": 1084},
      {"ownerId": 1, "address": "194 North Main Street", "city": "NEW YORK", "state": "New York", "country": "United States", "lat": 42.0622129, "lng": -71.8779105, "name": "Huge Designer Townhome |Private Backyard|", "description": "It is my main concern that you are well and happy with your stay in my gorgeous house. This house has been professionally cleaned and sanitized at a hospital-grade level. Do not miss out on comfort and luxury!!!", "price": 892},

    ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Spots', null, {
        address: ['1912 Ford Dr', '124124 Carmel Lane','1231 Apple Tr Lane', '1241 Watkins Road']
    })
  }
};
