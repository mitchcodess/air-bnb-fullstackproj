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
        ownerId: 2,
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
        ownerId: 3,
        address: '124124 Carmel Lane',
        city: 'Saint Louis',
        state: 'MO',
        country: 'US',
        lat: 257.235,
        lng: 124.14,
        name: "Resort Like Paradise",
        description: "The magic of our Private Villas with Private Pools in the middle of the jungle will captivate your senses and immerse you in a pleasant journey. Surrounded by the beauty that nature offers, your days will be painted in their colors and the sounds of birds, all this in a beautiful boho environment",
        price: 450,
      },
     
      {"ownerId": 4, "address": "328 17th Street", "city": "Yucca Valley", "state": "California", "country": "United States", "lat": 35.629985, "lng": -120.702516, "name": "Family Fun in the Desert w/Pool", "description": "Bring the whole family to relax and play in the desert! Whether you are looking for an escape to spend the entire weekend, or a home base while you explore nature you will never want to leave.", "price": 562},
      {"ownerId": 2, "address": "1422 North Dawn Drive", "city": "Indio Hills", "state": "California", "country": "United States", "lat": 36.08123, "lng": -94.167422, "name": "Salt Water Pool/ Spa/ BBQ/ Swim-Up Bar/ Fire Pit", "description": "REMOTE LOCATION.", "price": 894},
      {"ownerId": 1, "address": "3949 Ethan Allen Highway", "city": "Index", "state": "Washington", "country": "United States", "lat": 44.728245, "lng": -73.117943, "name": "The Treeframe Cabin", "description": "The Treeframe is a modern a-frame treehouse that offers an unforgettable short-term rental experience. Located in the heart of the forest and surrounded by nature, our treehouse is the perfect spot for travelers looking for a one-of-a-kind getaway.  Our treehouse is fully", "price": 995},
      {"ownerId": 1, "address": "435 Granite Street", "city": "Malibu", "state": "California", "country": "United States", "lat": 42.2404974, "lng": -71.01624509999999, "name": "Malibu Mid-Century Modern Luxury retreat home", "description": "Relax in a luxurious 3-story Malibu getaway with spectacular ocean & mountain views. Our newly-built mid-century modern 4 bedroom, 3.5 bath home is nestled in the peaceful Santa Monica mountains just minutes from Southern California's most famous beaches", "price": 1755},
      {"ownerId": 1, "address": "5630 Silverado Way", "city": "Atlantic Beach", "state": "North Carolina", "country": "United States", "lat": 61.1695128, "lng": -149.8896842, "name": "5 Star Luxury Sleeps 14 On Beach September SALE!", "description": "NEW CONST 5-STAR LUXURY OCEANFRONT 4-STORY, Elevator, 5 Bed,4.5 Bath SLEEPS 14 PEOPLE Located on \"Millionaire's Row\" Heated Pool,Jacuzzi,Pizza Oven,Beach Chairs & Umbrella,Game Room,Basketball,Gym,Games,Computer & Printer, 70\"TV,Art,Gourmet Kitchen seats 22", "price": 1837},
      {"ownerId": 1, "address": "701 West 36th Avenue", "city": "Bolivar Peninsula", "state": "Texas", "country": "United States", "lat": 61.18808639999999, "lng": -149.8964384, "name": "*HOT* New Beachfront Home: Beach Girl", "description": "Every day is a Holiday at Beach Girl!  This beachfront home is a 4 bedroom, 3 full bath home tastefully decorated with a coastal flair that sleeps 12 people. Enjoy amazing, unobstructed views of the Gulf Shoreline from both balconies; including", "price": 531},
     
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
