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
        name: "Arch",
        description: 'Arch Home',
        price: 450,
      },
      {
        ownerId: 1,
        address: '1231 Apple Tr Lane',
        city: 'Maint Mouis',
        state: 'MO',
        country: 'US',
        lat: 257.235,
        lng: 124.14,
        name: "Brick home",
        description: 'Old Town',
        price: 50,
      },
      {
        ownerId: 2,
        address: '1241 Watkins Road',
        city: 'Miami',
        state: 'FL',
        country: 'US',
        lat: 22.235,
        lng: 314.14,
        name: "Mansion",
        description: 'Mansion home',
        price: 200,
      }
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
