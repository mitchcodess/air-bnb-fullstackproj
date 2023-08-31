'use strict';

/** @type {import('sequelize-cli').Migration} */
const { Review } = require('../models')
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
    await Review.bulkCreate([{
      spotId: 1,
      userId: 1,
      review: "A wonderful house for a family vacation (large family). The pool was huge. I mean huge!!! The zero entry was great for the young kids, and the outdoor seating was spacious around the pool. We never went out to eat, because we didn't want to leave this place. The only time we left was for the short 5 minute walk to the beach. It was so close, that we could go several times a day for a dip in the ocean. It was perfect. The house was beautiful and perfectly set up for large groups.",
      stars: 5
    },{
      spotId: 1,
      userId: 2,
      review: "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
      stars: 4
    },
    {
      spotId: 2,
      userId: 1,
      review: "This rental was like going into an actual home where you instantly felt comfortable. The amenities were exactly as advertised and exceeded our expectations. Not only was the house and pool perfect, the beach was a quick and easy walk, and the host was so helpful. He was always very responsive with any questions I had leading up to my stay. So very kind and we couldn't be happier with our stay here. Literally couldn't find one thing I'd want to change! We are already looking forward to returning again.",
      stars: 5
    },
    {
      spotId: 2,
      userId: 2,
      review: "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
      stars: 4
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
    await queryInterface.bulkDelete('Reviews', null, {
      spotId: [2, 1]});
  }
};
