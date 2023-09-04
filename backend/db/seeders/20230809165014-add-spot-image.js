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
    {"spotId": 9, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-547361659402646128/original/89c15c5a-72f0-4acc-a1d9-23dab129ae40.jpeg?im_w=720", "preview": true},
    {"spotId": 9, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-547361659402646128/original/89c15c5a-72f0-4acc-a1d9-23dab129ae40.jpeg?im_w=720", "preview": false},
    {"spotId": 9, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-547361659402646128/original/02fdb0d4-4f16-4e05-85fb-ea13e2596f7c.jpeg?im_w=720", "preview": false},
    {"spotId": 9, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-547361659402646128/original/9aeacfaf-13cc-43b3-bd79-107786126503.jpeg?im_w=720", "preview": false},
    {"spotId": 9, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-547361659402646128/original/322c4867-e7ec-417a-b002-6a597c18c3be.jpeg?im_w=720", "preview": false},
    {"spotId": 10, "url": "https://a0.muscache.com/im/pictures/c4c92198-fb3a-4c4b-bbb6-3aa8af8f7e73.jpg?im_w=720", "preview": true},
    {"spotId": 10, "url": "https://a0.muscache.com/im/pictures/76672df0-df76-490b-8f77-dee11757ceae.jpg?im_w=720", "preview": false},
    {"spotId": 10, "url": "https://a0.muscache.com/im/pictures/313b1ffa-b52c-4aba-b51f-80e94d3f2be1.jpg?im_w=720", "preview": false},
    {"spotId": 10, "url": "https://a0.muscache.com/im/pictures/c4c92198-fb3a-4c4b-bbb6-3aa8af8f7e73.jpg?im_w=720", "preview": false},
    {"spotId": 10, "url": "https://a0.muscache.com/im/pictures/29087f74-bd90-4cce-aa65-435673b2c3db.jpg?im_w=720", "preview": false},
    {"spotId": 11, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-833588507621223725/original/784e0ab1-8ecf-4e8d-9a82-7f0c24630f3a.jpeg?im_w=720", "preview": true},
    {"spotId": 11, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-833588507621223725/original/3b4daa13-ec4e-4aa6-9a98-0956dfe7f285.jpeg?im_w=720", "preview": false},
    {"spotId": 11, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-833588507621223725/original/fba4a867-44c0-40f7-a499-d18789be76d5.jpeg?im_w=720", "preview": false},
    {"spotId": 11, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-833588507621223725/original/784e0ab1-8ecf-4e8d-9a82-7f0c24630f3a.jpeg?im_w=720", "preview": false},
    {"spotId": 11, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-833588507621223725/original/ade526d5-b237-4444-9810-42b1e177bc55.jpeg?im_w=720", "preview": false},
    {"spotId": 12, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-907839465027083460/original/d02344bf-0627-484d-be29-30b77ea6be22.jpeg?im_w=720", "preview": true},
    {"spotId": 12, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-907839465027083460/original/be8f815a-3549-4d8d-b6e8-6039145cc489.jpeg?im_w=720", "preview": false},
    {"spotId": 12, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-907839465027083460/original/b5942ac4-3c4d-4a23-ac23-3dce08499ea4.jpeg?im_w=720", "preview": false},
    {"spotId": 12, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-907839465027083460/original/a94660e7-3506-4f59-ad59-b5defeb3c539.jpeg?im_w=720", "preview": false},
    {"spotId": 12, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-907839465027083460/original/d02344bf-0627-484d-be29-30b77ea6be22.jpeg?im_w=720", "preview": false},
    {"spotId": 13, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-34395488/original/01a0121c-881f-413b-8aee-c3f92d235299.jpeg?im_w=720", "preview": true},
    {"spotId": 13, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-34395488/original/661b0927-1b8f-46c7-9ed9-bbb7170d9299.jpeg?im_w=720", "preview": false},
    {"spotId": 13, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-34395488/original/f58b007b-346a-4c37-b6a0-2bd8db545c76.jpeg?im_w=720", "preview": false},
    {"spotId": 13, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-34395488/original/5604a1f6-5ee9-4430-93a6-8cdde69fa997.jpeg?im_w=720", "preview": false},
    {"spotId": 13, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-34395488/original/01a0121c-881f-413b-8aee-c3f92d235299.jpeg?im_w=720", "preview": false},
    {"spotId": 14, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-915224139956934659/original/f7c60aa1-cf7f-4e5c-8510-363e4f5db9eb.jpeg?im_w=720", "preview": true},
    {"spotId": 14, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-915224139956934659/original/f7c60aa1-cf7f-4e5c-8510-363e4f5db9eb.jpeg?im_w=720", "preview": false},
    {"spotId": 14, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-915224139956934659/original/93493e87-c8f1-4099-bc48-c560fb40b074.jpeg?im_w=720", "preview": false},
    {"spotId": 14, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-915224139956934659/original/38f052bb-a675-46cd-bca4-f4b83e7a1479.jpeg?im_w=720", "preview": false},
    {"spotId": 14, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-915224139956934659/original/fbf888dc-6ed8-4dbc-b9cd-345904f624e0.jpeg?im_w=720", "preview": false},
    {"spotId": 15, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584767554116271887/original/90467984-3591-4bf9-bd98-cf185242a784.jpeg?im_w=720", "preview": true},
    {"spotId": 15, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584767554116271887/original/9c0b1c9b-9615-4923-9969-7a8d96331532.png?im_w=720", "preview": false},
    {"spotId": 15, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584767554116271887/original/f47ecc3d-7898-48d8-a3dd-1afe556f5dad.jpeg?im_w=720", "preview": false},
    {"spotId": 15, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584767554116271887/original/d7cc75dc-3eeb-44b6-8798-9bb52c187642.jpeg?im_w=720", "preview": false},
    {"spotId": 15, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584767554116271887/original/90467984-3591-4bf9-bd98-cf185242a784.jpeg?im_w=720", "preview": false},
    {"spotId": 16, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-898622005542393497/original/2dd7e47b-7fe0-4dd5-8c03-87870a2e113d.jpeg?im_w=720", "preview": true},
    {"spotId": 16, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-898622005542393497/original/23c7ffbf-4f73-4e7d-809d-6ba8dd210b9f.jpeg?im_w=720", "preview": false},
    {"spotId": 16, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-898622005542393497/original/3c4c987d-aee2-45fa-8481-eb35288dbfe2.jpeg?im_w=720", "preview": false},
    {"spotId": 16, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-898622005542393497/original/2dd7e47b-7fe0-4dd5-8c03-87870a2e113d.jpeg?im_w=720", "preview": false},
    {"spotId": 16, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-898622005542393497/original/a4a42150-f313-418c-9d08-fdfda6c9c647.jpeg?im_w=720", "preview": false},
    {"spotId": 17, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-612294899600198445/original/1941796b-733e-4277-a93a-d878e2fc0e37.png?im_w=720", "preview": true},
    {"spotId": 17, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-612294899600198445/original/3e772c2f-aadb-4605-beb6-d6d0434fba76.png?im_w=720", "preview": false},
    {"spotId": 17, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-612294899600198445/original/ca2dc227-100c-4380-a7f0-d21277c260ad.jpeg?im_w=720", "preview": false},
    {"spotId": 17, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-612294899600198445/original/f1388f87-1c12-4327-bf87-f36c44fd3385.png?im_w=720", "preview": false},
    {"spotId": 17, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-612294899600198445/original/1941796b-733e-4277-a93a-d878e2fc0e37.png?im_w=720", "preview": false},
    {"spotId": 18, "url": "https://a0.muscache.com/im/pictures/2e5ce6c9-4935-49ce-891e-e6f7251a8590.jpg?im_w=720", "preview": true},
    {"spotId": 18, "url": "https://a0.muscache.com/im/pictures/43016987-a5eb-47df-902d-a20960417fab.jpg?im_w=720", "preview": false},
    {"spotId": 18, "url": "https://a0.muscache.com/im/pictures/miso/Hosting-3156442/original/eceb2738-e46e-4ebb-8c74-99d9d5bbb82e.jpeg?im_w=720", "preview": false},
    {"spotId": 18, "url": "https://a0.muscache.com/im/pictures/2e5ce6c9-4935-49ce-891e-e6f7251a8590.jpg?im_w=720", "preview": false},
    {"spotId": 18, "url": "https://a0.muscache.com/im/pictures/8cd65997-d77d-40f0-a41c-18ef2559d881.jpg?im_w=720", "preview": false},
    {"spotId": 19, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-35451163/original/382291b9-0269-4381-9615-b24467b40efa.jpeg?im_w=720", "preview": true},
    {"spotId": 19, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-35451163/original/77728786-0fe9-4e5d-a0a2-a1caea36ec4e.jpeg?im_w=720", "preview": false},
    {"spotId": 19, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-35451163/original/25423237-6ae5-49e3-a8d4-466886eb695e.jpeg?im_w=720", "preview": false},
    {"spotId": 19, "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-35451163/original/446fd740-5c86-4582-89df-3a8598922831.jpeg?im_w=720", "preview": false},

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
