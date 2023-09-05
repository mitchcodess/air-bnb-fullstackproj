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
      url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45063249/original/54b2100d-c7d1-49cf-89bb-9f3f08bbca98.jpeg?im_w=960',
      preview: true,
    },
    {
      spotId: 2,
      url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45063249/original/fb74f927-51f0-4bb3-9134-ad1b8c8c8465.jpeg?im_w=720',
      preview: false,
    },
    {
      spotId: 2,
      url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45063249/original/0b4e8556-74dd-4ac3-8229-e01cf9a3e561.jpeg?im_w=720',
      preview: false,
    },
    {
      spotId: 2,
      url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45063249/original/3e9d2209-f88a-48d3-8d2f-6c707b4824bf.jpeg?im_w=720',
      preview: false,
    },
    {
      spotId: 2,
      url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-45063249/original/3e9d2209-f88a-48d3-8d2f-6c707b4824bf.jpeg?im_w=720',
      preview: false,
    },{"spotId": 3, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-907299098878369774/original/40cbe8b4-0159-4f91-99e6-cd2310a23a81.jpeg?im_w=720", "preview": true},
    {"spotId": 3, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-907299098878369774/original/ff695f65-4333-419f-95f2-d6aff74ffd5b.jpeg?im_w=720", "preview": false},
    {"spotId": 3, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-907299098878369774/original/8e2f9f3f-9275-41c6-a6f2-9856b872cba0.jpeg?im_w=720", "preview": false},
    {"spotId": 3, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-907299098878369774/original/30894de4-1215-4d33-aaff-5b393b32ec35.jpeg?im_w=720", "preview": false},
    {"spotId": 3, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-907299098878369774/original/825229a7-1c54-4b40-b6bc-aa4f4611eed3.jpeg?im_w=720", "preview": false},
    {"spotId": 4, "url": "https://a0.muscache.com/im/pictures/88d46041-60a0-4064-ae28-03423174766c.jpg?im_w=720", "preview": true},
    {"spotId": 4, "url": "https://a0.muscache.com/im/pictures/5b9821ed-5098-41ea-96a7-824bfdc5c115.jpg?im_w=720", "preview": false},
    {"spotId": 4, "url": "https://a0.muscache.com/im/pictures/b077a2ad-8774-42ba-b995-f1de6f49eed5.jpg?im_w=720", "preview": false},
    {"spotId": 4, "url": "https://a0.muscache.com/im/pictures/c9cf376c-3c53-4165-a9cf-070e4e6cb503.jpg?im_w=720", "preview": false},
    {"spotId": 4, "url": "https://a0.muscache.com/im/pictures/3190b76f-ae94-4233-9bd8-8a2460ffd19d.jpg?im_w=720", "preview": false},
    {"spotId": 5, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/cc3a98b7-d83e-4684-bb03-2b2ce6dd480d.jpeg?im_w=720", "preview": true},
    {"spotId": 5, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/bf91b1f5-1942-4ecd-95b0-328bb617c47e.jpeg?im_w=720", "preview": false},
    {"spotId": 5, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/992ad5e1-78c8-43d4-9b69-a898d4ac21f6.jpeg?im_w=720", "preview": false},
    {"spotId": 5, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/bca57cdc-bc62-4366-91e9-03ba6c4059ee.jpeg?im_w=720", "preview": false},
    {"spotId": 5, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/cc3a98b7-d83e-4684-bb03-2b2ce6dd480d.jpeg?im_w=720", "preview": false},
    {"spotId": 6, "url": "https://a0.muscache.com/im/pictures/8255bdb1-1d65-4325-a744-6487dc51453b.jpg?im_w=720", "preview": true},
    {"spotId": 6, "url": "https://a0.muscache.com/im/pictures/03b68c52-5db9-45db-842b-0a428c6e690b.jpg?im_w=720", "preview": false},
    {"spotId": 6, "url": "https://a0.muscache.com/im/pictures/8255bdb1-1d65-4325-a744-6487dc51453b.jpg?im_w=720", "preview": false},
    {"spotId": 6, "url": "https://a0.muscache.com/im/pictures/ccbf22b9-ae45-40f8-96c3-fe0688fdba20.jpg?im_w=720", "preview": false},
    {"spotId": 6, "url": "https://a0.muscache.com/im/pictures/f87849af-a308-4fe8-9c1f-1acbf077784a.jpg?im_w=720", "preview": false},
    {"spotId": 7, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-779486252857801661/original/650a900c-e568-4bba-ad1a-9599bccdc0a7.jpeg?im_w=720", "preview": true},
    {"spotId": 7, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-779486252857801661/original/16998bb0-b599-4ca2-9c8b-2e32294a4abd.jpeg?im_w=720", "preview": false},
    {"spotId": 7, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-779486252857801661/original/e39d1945-d1e0-44fe-94a0-40cde4051f5e.jpeg?im_w=720", "preview": false},
    {"spotId": 7, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-779486252857801661/original/ecbe36d9-9a94-4000-91b1-dddf05c21c30.jpeg?im_w=720", "preview": false},
    {"spotId": 7, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-779486252857801661/original/f67b2097-30c2-426b-a9e9-e8aed16f8c95.jpeg?im_w=720", "preview": false},
    {"spotId": 8, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-888432056362899473/original/f039e7f7-0680-414f-9635-c3984ba21767.jpeg?im_w=720", "preview": true},
    {"spotId": 8, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-888432056362899473/original/13f9a7ae-40d5-4ec0-91b7-32ff6ffb302b.png?im_w=720", "preview": false},
    {"spotId": 8, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-888432056362899473/original/496b635e-2d62-4f77-8080-91de2ed2920f.jpeg?im_w=720", "preview": false},
    {"spotId": 8, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-888432056362899473/original/3aae0075-3daf-4317-bba8-148f97d6a7e0.jpeg?im_w=720", "preview": false},
    {"spotId": 8, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-888432056362899473/original/8775adfd-e792-48c0-9047-458f12577d3d.jpeg?im_w=720", "preview": false},
    
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
