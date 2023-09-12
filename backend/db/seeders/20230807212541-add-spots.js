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
        description: 'Summerville Resort is a new and prestigious collection of town-home villas just 5 miles from the entrance to Walt Disney World! ',
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
        description: "The magic of our Private Villas with Private Pools in the middle of the jungle will captivate your senses and immerse you in a pleasant journey.",
        price: 450,
      },
     
      {"ownerId": 4, "address": "328 17th Street", "city": "Yucca Valley", "state": "California", "country": "United States", "lat": 35.629985, "lng": -120.702516, "name": "Family Fun in the Desert w/Pool", "description": "Bring the whole family to relax and play in the desert! Whether you are looking for an escape to spend the entire weekend, or a home base while you explore nature you will never want to leave.", "price": 562},
      {"ownerId": 2, "address": "1422 North Dawn Drive", "city": "Indio Hills", "state": "California", "country": "United States", "lat": 36.08123, "lng": -94.167422, "name": "Salt Water Pool/ Spa/ BBQ/ Swim-Up Bar/ Fire Pit", "description": "REMOTE LOCATION.", "price": 894},
      {"ownerId": 1, "address": "3949 Ethan Allen Highway", "city": "Index", "state": "Washington", "country": "United States", "lat": 44.728245, "lng": -73.117943, "name": "The Treeframe Cabin", "description": "The Treeframe is a modern a-frame treehouse that offers an unforgettable short-term rental experience", "price": 995},
      {"ownerId": 1, "address": "435 Granite Street", "city": "Malibu", "state": "California", "country": "United States", "lat": 42.2404974, "lng": -71.01624509999999, "name": "Malibu Mid-Century Modern Luxury retreat home", "price": 1755},
      {"ownerId": 1, "address": "5630 Silverado Way", "city": "Atlantic Beach", "state": "North Carolina", "country": "United States", "lat": 61.1695128, "lng": -149.8896842, "name": "5 Star Luxury Sleeps 14 On Beach September SALE!", "description": "NEW CONST 5-STAR LUXURY OCEANFRONT 4-STORY, Elevator, 5 Bed,4.5 Bath SLEEPS 14 PEOPLE Located", "price": 1837},
      {"ownerId": 1, "address": "701 West 36th Avenue", "city": "Bolivar Peninsula", "state": "Texas", "country": "United States", "lat": 61.18808639999999, "lng": -149.8964384, "name": "*HOT* New Beachfront Home: Beach Girl", "description": "Every day is a Holiday at Beach Girl", "price": 531},
     
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
