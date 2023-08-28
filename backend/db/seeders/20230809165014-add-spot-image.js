'use strict';
const { SpotImage } = require('../models')
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
    await SpotImage.bulkCreate([{
      spotId: 1,
      url: 'https://a0.muscache.com/im/pictures/miso/Hosting-883986732735802686/original/4c9c31b3-0005-4e4a-92d1-f29164701109.jpeg?im_w=960',
      preview: true,
    },
    {
      spotId: 1,
      url: 'https://a0.muscache.com/im/pictures/miso/Hosting-883986732735802686/original/65629da0-cf98-4522-8dc1-185aee51c094.png?im_w=720',
      preview: false,
    },
    {
      spotId: 1,
      url: 'ghttps://a0.muscache.com/im/pictures/miso/Hosting-883986732735802686/original/b77cd2bc-c27c-4949-a55a-e7555496b422.jpeg?im_w=720',
      preview: false,
    },
    {
      spotId: 1,
      url: 'https://a0.muscache.com/im/pictures/miso/Hosting-883986732735802686/original/c6581dff-9d20-4d4b-a3a0-2c424e5c5ada.jpeg?im_w=720',
      preview: false,
    },
    {
      spotId: 1,
      url: 'https://a0.muscache.com/im/pictures/miso/Hosting-883986732735802686/original/fb47e788-7afa-489d-a1da-ffe91c1b825e.jpeg?im_w=720',
      preview: false,
    },
    {
      spotId: 2,
      url: 'google.com',
      preview: true,
    },
    {
      spotId: 3,
      url: 'google.com',
      preview: true,
    },
    {
      spotId: 4,
      url: 'google.com',
      preview: true,
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
    await queryInterface.bulkDelete('SpotImages', null, {
      spotId: [1, 2, 3, 4]
    })
  }
};
