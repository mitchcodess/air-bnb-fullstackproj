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
    },
      {
        "spotId": 1,
        "userId": 4,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 1,
        "userId": 5,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 1,
        "userId": 6,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 1,
        "userId": 7,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 1,
        "userId": 8,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 1,
        "userId": 9,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 1,
        "userId": 10,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 1,
        "userId": 11,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 1,
        "userId": 12,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 1,
        "userId": 13,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 1,
        "userId": 14,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 1,
        "userId": 15,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 1,
        "userId": 16,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 1,
        "userId": 17,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 1,
        "userId": 18,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 2,
        "userId": 19,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 2,
        "userId": 20,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 2,
        "userId": 21,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 2,
        "userId": 22,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 2,
        "userId": 23,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 2,
        "userId": 24,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 2,
        "userId": 25,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 2,
        "userId": 26,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 2,
        "userId": 27,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 2,
        "userId": 28,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 2,
        "userId": 29,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 2,
        "userId": 30,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 2,
        "userId": 31,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 2,
        "userId": 32,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 2,
        "userId": 33,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 2,
        "userId": 34,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 2,
        "userId": 35,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 2,
        "userId": 36,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 3,
        "userId": 37,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 3,
        "userId": 38,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 3,
        "userId": 39,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 3,
        "userId": 40,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 3,
        "userId": 41,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 3,
        "userId": 42,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 3,
        "userId": 43,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 3,
        "userId": 44,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 3,
        "userId": 45,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 3,
        "userId": 46,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 3,
        "userId": 47,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 3,
        "userId": 48,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 3,
        "userId": 49,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 3,
        "userId": 50,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 3,
        "userId": 51,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 3,
        "userId": 52,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 3,
        "userId": 53,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 4,
        "userId": 54,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 4,
        "userId": 55,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 4,
        "userId": 56,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 4,
        "userId": 57,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 4,
        "userId": 58,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 4,
        "userId": 59,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 4,
        "userId": 60,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 4,
        "userId": 61,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 4,
        "userId": 62,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 4,
        "userId": 63,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 4,
        "userId": 64,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 4,
        "userId": 65,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 4,
        "userId": 66,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 4,
        "userId": 67,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 4,
        "userId": 68,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 4,
        "userId": 69,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 4,
        "userId": 70,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 4,
        "userId": 71,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 4,
        "userId": 72,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 5,
        "userId": 73,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 74,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 5,
        "userId": 75,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 5,
        "userId": 76,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 77,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 78,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 79,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 80,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 5,
        "userId": 81,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 82,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 5,
        "userId": 83,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 84,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 85,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 86,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 5,
        "userId": 87,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 5,
        "userId": 88,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 5,
        "userId": 89,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 6,
        "userId": 90,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 6,
        "userId": 91,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 6,
        "userId": 92,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 6,
        "userId": 93,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 6,
        "userId": 94,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 6,
        "userId": 95,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 6,
        "userId": 96,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 6,
        "userId": 97,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 6,
        "userId": 98,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 6,
        "userId": 99,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 6,
        "userId": 100,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 7,
        "userId": 101,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 7,
        "userId": 102,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 7,
        "userId": 103,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 7,
        "userId": 104,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 7,
        "userId": 105,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 7,
        "userId": 106,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 7,
        "userId": 107,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 7,
        "userId": 108,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 7,
        "userId": 109,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 7,
        "userId": 110,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 7,
        "userId": 111,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 7,
        "userId": 112,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 7,
        "userId": 113,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 7,
        "userId": 114,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 7,
        "userId": 115,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 7,
        "userId": 116,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 7,
        "userId": 117,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 7,
        "userId": 118,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 7,
        "userId": 119,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 7,
        "userId": 120,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 8,
        "userId": 121,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 8,
        "userId": 122,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 8,
        "userId": 123,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 8,
        "userId": 124,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 8,
        "userId": 125,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 8,
        "userId": 126,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 8,
        "userId": 127,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 8,
        "userId": 128,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 8,
        "userId": 129,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 8,
        "userId": 130,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 8,
        "userId": 131,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 8,
        "userId": 132,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 8,
        "userId": 133,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 8,
        "userId": 134,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 8,
        "userId": 135,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 8,
        "userId": 136,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 8,
        "userId": 137,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 8,
        "userId": 138,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 9,
        "userId": 139,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 9,
        "userId": 140,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 9,
        "userId": 141,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 9,
        "userId": 142,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 9,
        "userId": 143,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 9,
        "userId": 144,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 9,
        "userId": 145,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 9,
        "userId": 146,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 9,
        "userId": 147,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 9,
        "userId": 148,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 9,
        "userId": 149,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 9,
        "userId": 150,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 9,
        "userId": 151,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 9,
        "userId": 152,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 9,
        "userId": 153,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 9,
        "userId": 154,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 155,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 10,
        "userId": 156,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 157,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 10,
        "userId": 158,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 10,
        "userId": 159,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 160,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 161,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 10,
        "userId": 162,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 163,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 164,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 10,
        "userId": 165,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 10,
        "userId": 166,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 167,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 10,
        "userId": 168,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 169,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 10,
        "userId": 170,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 10,
        "userId": 171,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 172,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 173,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 10,
        "userId": 174,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 11,
        "userId": 175,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 11,
        "userId": 176,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 11,
        "userId": 177,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 11,
        "userId": 178,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 11,
        "userId": 179,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 11,
        "userId": 180,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 11,
        "userId": 181,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 11,
        "userId": 182,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 11,
        "userId": 183,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 11,
        "userId": 184,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 11,
        "userId": 185,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 11,
        "userId": 186,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 12,
        "userId": 187,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 12,
        "userId": 188,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 12,
        "userId": 189,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 12,
        "userId": 190,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 12,
        "userId": 191,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 12,
        "userId": 192,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 12,
        "userId": 193,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 12,
        "userId": 194,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 12,
        "userId": 195,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 12,
        "userId": 196,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 12,
        "userId": 197,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 12,
        "userId": 198,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 12,
        "userId": 199,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 12,
        "userId": 200,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 12,
        "userId": 201,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 12,
        "userId": 202,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 13,
        "userId": 203,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 13,
        "userId": 204,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 13,
        "userId": 205,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 13,
        "userId": 206,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 13,
        "userId": 207,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 13,
        "userId": 208,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 13,
        "userId": 209,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 13,
        "userId": 210,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 13,
        "userId": 211,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 13,
        "userId": 212,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 13,
        "userId": 213,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 13,
        "userId": 214,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 13,
        "userId": 215,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 13,
        "userId": 216,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 13,
        "userId": 217,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 13,
        "userId": 218,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 13,
        "userId": 219,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 13,
        "userId": 220,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 14,
        "userId": 221,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 14,
        "userId": 222,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 14,
        "userId": 223,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 14,
        "userId": 224,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 14,
        "userId": 225,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 14,
        "userId": 226,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 14,
        "userId": 227,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 14,
        "userId": 228,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 14,
        "userId": 229,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 14,
        "userId": 230,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 14,
        "userId": 231,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 14,
        "userId": 232,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 14,
        "userId": 233,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 14,
        "userId": 234,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 14,
        "userId": 235,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 14,
        "userId": 236,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 14,
        "userId": 237,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 14,
        "userId": 238,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 15,
        "userId": 239,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 15,
        "userId": 240,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 15,
        "userId": 241,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 15,
        "userId": 242,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 15,
        "userId": 243,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 15,
        "userId": 244,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 15,
        "userId": 245,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 15,
        "userId": 246,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 15,
        "userId": 247,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 15,
        "userId": 248,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 15,
        "userId": 249,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 15,
        "userId": 250,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 15,
        "userId": 251,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 15,
        "userId": 252,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 15,
        "userId": 253,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 15,
        "userId": 254,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 15,
        "userId": 255,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 15,
        "userId": 256,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 16,
        "userId": 257,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 16,
        "userId": 258,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 16,
        "userId": 259,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 16,
        "userId": 260,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 16,
        "userId": 261,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 16,
        "userId": 262,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 16,
        "userId": 263,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 16,
        "userId": 264,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 16,
        "userId": 265,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 16,
        "userId": 266,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 17,
        "userId": 267,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 268,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 17,
        "userId": 269,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 270,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 271,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 272,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 273,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 274,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 275,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 276,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 17,
        "userId": 277,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 278,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 17,
        "userId": 279,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 280,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 281,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 17,
        "userId": 282,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 17,
        "userId": 283,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 18,
        "userId": 284,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 18,
        "userId": 285,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 18,
        "userId": 286,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 18,
        "userId": 287,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 18,
        "userId": 288,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 18,
        "userId": 289,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 18,
        "userId": 290,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 18,
        "userId": 291,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 18,
        "userId": 292,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 18,
        "userId": 293,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 18,
        "userId": 294,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 18,
        "userId": 295,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 18,
        "userId": 296,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 18,
        "userId": 297,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 18,
        "userId": 298,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 18,
        "userId": 299,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 18,
        "userId": 300,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 18,
        "userId": 301,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 19,
        "userId": 302,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 19,
        "userId": 303,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 19,
        "userId": 304,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 19,
        "userId": 305,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 19,
        "userId": 306,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 19,
        "userId": 307,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 19,
        "userId": 308,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 19,
        "userId": 309,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 19,
        "userId": 310,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 19,
        "userId": 311,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 19,
        "userId": 312,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 19,
        "userId": 313,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 19,
        "userId": 314,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 19,
        "userId": 315,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 19,
        "userId": 316,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 19,
        "userId": 317,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 20,
        "userId": 318,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 20,
        "userId": 319,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 20,
        "userId": 320,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 20,
        "userId": 321,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 20,
        "userId": 322,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 20,
        "userId": 323,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 20,
        "userId": 324,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 20,
        "userId": 325,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 20,
        "userId": 326,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 20,
        "userId": 327,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 20,
        "userId": 328,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 20,
        "userId": 329,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 20,
        "userId": 330,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 20,
        "userId": 331,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 20,
        "userId": 332,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 20,
        "userId": 333,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 20,
        "userId": 334,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 20,
        "userId": 335,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 21,
        "userId": 336,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 21,
        "userId": 337,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 21,
        "userId": 338,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 21,
        "userId": 339,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 21,
        "userId": 340,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 21,
        "userId": 341,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 21,
        "userId": 342,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 21,
        "userId": 343,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 21,
        "userId": 344,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 21,
        "userId": 345,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 21,
        "userId": 346,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 22,
        "userId": 347,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 22,
        "userId": 348,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 22,
        "userId": 349,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 22,
        "userId": 350,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 22,
        "userId": 351,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 22,
        "userId": 352,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 22,
        "userId": 353,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 22,
        "userId": 354,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 22,
        "userId": 355,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 22,
        "userId": 356,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 22,
        "userId": 357,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 22,
        "userId": 358,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 23,
        "userId": 359,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 23,
        "userId": 360,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 23,
        "userId": 361,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 23,
        "userId": 362,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 23,
        "userId": 363,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 23,
        "userId": 364,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 23,
        "userId": 365,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 23,
        "userId": 366,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 23,
        "userId": 367,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 23,
        "userId": 368,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 23,
        "userId": 369,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 23,
        "userId": 370,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 23,
        "userId": 371,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 24,
        "userId": 372,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 24,
        "userId": 373,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 24,
        "userId": 374,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 24,
        "userId": 375,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 24,
        "userId": 376,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 24,
        "userId": 377,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 24,
        "userId": 378,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 24,
        "userId": 379,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 24,
        "userId": 380,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 24,
        "userId": 381,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 24,
        "userId": 382,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 24,
        "userId": 383,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 24,
        "userId": 384,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 24,
        "userId": 385,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 24,
        "userId": 386,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 24,
        "userId": 387,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 25,
        "userId": 388,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 25,
        "userId": 389,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 25,
        "userId": 390,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 25,
        "userId": 391,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 25,
        "userId": 392,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 25,
        "userId": 393,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 25,
        "userId": 394,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 25,
        "userId": 395,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 25,
        "userId": 396,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 25,
        "userId": 397,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 25,
        "userId": 398,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 25,
        "userId": 399,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 25,
        "userId": 400,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 25,
        "userId": 401,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 26,
        "userId": 402,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 26,
        "userId": 403,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 26,
        "userId": 404,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 26,
        "userId": 405,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 26,
        "userId": 406,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 26,
        "userId": 407,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 26,
        "userId": 408,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 26,
        "userId": 409,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 26,
        "userId": 410,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 26,
        "userId": 411,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 26,
        "userId": 412,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 26,
        "userId": 413,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 26,
        "userId": 414,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 26,
        "userId": 415,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 26,
        "userId": 416,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 26,
        "userId": 417,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 26,
        "userId": 418,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 26,
        "userId": 419,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 27,
        "userId": 420,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 27,
        "userId": 421,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 27,
        "userId": 422,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 27,
        "userId": 423,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 27,
        "userId": 424,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 27,
        "userId": 425,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 27,
        "userId": 426,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 27,
        "userId": 427,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 27,
        "userId": 428,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 27,
        "userId": 429,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 28,
        "userId": 430,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 28,
        "userId": 431,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 28,
        "userId": 432,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 28,
        "userId": 433,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 28,
        "userId": 434,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 28,
        "userId": 435,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 28,
        "userId": 436,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 28,
        "userId": 437,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 28,
        "userId": 438,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 28,
        "userId": 439,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 28,
        "userId": 440,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 28,
        "userId": 441,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 28,
        "userId": 442,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 28,
        "userId": 443,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 28,
        "userId": 444,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 29,
        "userId": 445,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 29,
        "userId": 446,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 29,
        "userId": 447,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 29,
        "userId": 448,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 29,
        "userId": 449,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 29,
        "userId": 450,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 29,
        "userId": 451,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 29,
        "userId": 452,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 29,
        "userId": 453,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 29,
        "userId": 454,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 29,
        "userId": 455,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 30,
        "userId": 456,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 30,
        "userId": 457,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 30,
        "userId": 458,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 30,
        "userId": 459,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 30,
        "userId": 460,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 30,
        "userId": 461,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 30,
        "userId": 462,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 30,
        "userId": 463,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 30,
        "userId": 464,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 30,
        "userId": 465,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 30,
        "userId": 466,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 30,
        "userId": 467,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 31,
        "userId": 468,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 31,
        "userId": 469,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 31,
        "userId": 470,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 31,
        "userId": 471,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 31,
        "userId": 472,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 31,
        "userId": 473,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 31,
        "userId": 474,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 31,
        "userId": 475,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 31,
        "userId": 476,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 31,
        "userId": 477,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 31,
        "userId": 478,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 31,
        "userId": 479,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 31,
        "userId": 480,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 31,
        "userId": 481,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 31,
        "userId": 482,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 31,
        "userId": 483,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 31,
        "userId": 484,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 31,
        "userId": 485,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 31,
        "userId": 486,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 32,
        "userId": 487,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 32,
        "userId": 488,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 32,
        "userId": 489,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 32,
        "userId": 490,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 32,
        "userId": 491,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 32,
        "userId": 492,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 32,
        "userId": 493,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 32,
        "userId": 494,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 32,
        "userId": 495,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 32,
        "userId": 496,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 32,
        "userId": 497,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 33,
        "userId": 498,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 33,
        "userId": 499,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 33,
        "userId": 500,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 33,
        "userId": 501,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 33,
        "userId": 502,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 33,
        "userId": 503,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 33,
        "userId": 504,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 33,
        "userId": 505,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 33,
        "userId": 506,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 33,
        "userId": 507,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 33,
        "userId": 508,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 33,
        "userId": 509,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 33,
        "userId": 510,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 34,
        "userId": 511,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 34,
        "userId": 512,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 34,
        "userId": 513,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 34,
        "userId": 514,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 34,
        "userId": 515,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 34,
        "userId": 516,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 34,
        "userId": 517,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 34,
        "userId": 518,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 34,
        "userId": 519,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 34,
        "userId": 520,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 34,
        "userId": 521,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 34,
        "userId": 522,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 34,
        "userId": 523,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 34,
        "userId": 524,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 34,
        "userId": 525,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 35,
        "userId": 526,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 35,
        "userId": 527,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 35,
        "userId": 528,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 35,
        "userId": 529,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 35,
        "userId": 530,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 35,
        "userId": 531,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 35,
        "userId": 532,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 35,
        "userId": 533,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 35,
        "userId": 534,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 35,
        "userId": 535,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 35,
        "userId": 536,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 35,
        "userId": 537,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 36,
        "userId": 538,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 36,
        "userId": 539,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 36,
        "userId": 540,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 36,
        "userId": 541,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 36,
        "userId": 542,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 36,
        "userId": 543,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 36,
        "userId": 544,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 36,
        "userId": 545,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 36,
        "userId": 546,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 36,
        "userId": 547,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 36,
        "userId": 548,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 549,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 37,
        "userId": 550,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 551,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 37,
        "userId": 552,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 37,
        "userId": 553,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 554,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 37,
        "userId": 555,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 556,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 37,
        "userId": 557,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 37,
        "userId": 558,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 37,
        "userId": 559,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 560,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 561,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 37,
        "userId": 562,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 563,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 564,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 565,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 566,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 567,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 37,
        "userId": 568,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 38,
        "userId": 569,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 38,
        "userId": 570,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 38,
        "userId": 571,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 38,
        "userId": 572,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 38,
        "userId": 573,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 38,
        "userId": 574,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 38,
        "userId": 575,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 38,
        "userId": 576,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 38,
        "userId": 577,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 38,
        "userId": 578,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 38,
        "userId": 579,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 38,
        "userId": 580,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 38,
        "userId": 581,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 38,
        "userId": 582,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 39,
        "userId": 583,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 39,
        "userId": 584,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 39,
        "userId": 585,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 39,
        "userId": 586,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 39,
        "userId": 587,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 39,
        "userId": 588,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 39,
        "userId": 589,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 39,
        "userId": 590,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 39,
        "userId": 591,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 39,
        "userId": 592,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 39,
        "userId": 593,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 39,
        "userId": 594,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 39,
        "userId": 595,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 39,
        "userId": 596,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 39,
        "userId": 597,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 39,
        "userId": 598,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 39,
        "userId": 599,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 40,
        "userId": 600,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 40,
        "userId": 601,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 40,
        "userId": 602,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 40,
        "userId": 603,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 40,
        "userId": 604,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 40,
        "userId": 605,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 40,
        "userId": 606,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 40,
        "userId": 607,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 40,
        "userId": 608,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 40,
        "userId": 609,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 40,
        "userId": 610,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 41,
        "userId": 611,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 41,
        "userId": 612,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 41,
        "userId": 613,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 41,
        "userId": 614,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 41,
        "userId": 615,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 41,
        "userId": 616,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 41,
        "userId": 617,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 41,
        "userId": 618,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 41,
        "userId": 619,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 41,
        "userId": 620,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 41,
        "userId": 621,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 41,
        "userId": 622,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 41,
        "userId": 623,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 41,
        "userId": 624,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 41,
        "userId": 625,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 42,
        "userId": 626,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 627,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 628,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 629,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 630,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 631,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 632,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 633,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 42,
        "userId": 634,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 42,
        "userId": 635,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 636,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 637,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 638,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 639,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 640,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 42,
        "userId": 641,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 42,
        "userId": 642,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 42,
        "userId": 643,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 42,
        "userId": 644,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 43,
        "userId": 645,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 43,
        "userId": 646,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 43,
        "userId": 647,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 43,
        "userId": 648,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 43,
        "userId": 649,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 43,
        "userId": 650,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 43,
        "userId": 651,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 43,
        "userId": 652,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 43,
        "userId": 653,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 43,
        "userId": 654,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 43,
        "userId": 655,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 43,
        "userId": 656,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 43,
        "userId": 657,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 43,
        "userId": 658,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 43,
        "userId": 659,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 43,
        "userId": 660,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 44,
        "userId": 661,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 44,
        "userId": 662,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 44,
        "userId": 663,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 44,
        "userId": 664,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 44,
        "userId": 665,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 44,
        "userId": 666,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 44,
        "userId": 667,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 44,
        "userId": 668,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 44,
        "userId": 669,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 44,
        "userId": 670,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 44,
        "userId": 671,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 44,
        "userId": 672,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 44,
        "userId": 673,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 44,
        "userId": 674,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 44,
        "userId": 675,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 44,
        "userId": 676,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 44,
        "userId": 677,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 45,
        "userId": 678,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 45,
        "userId": 679,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 45,
        "userId": 680,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 45,
        "userId": 681,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 45,
        "userId": 682,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 45,
        "userId": 683,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 45,
        "userId": 684,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 45,
        "userId": 685,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 45,
        "userId": 686,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 45,
        "userId": 687,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 45,
        "userId": 688,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 46,
        "userId": 689,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 46,
        "userId": 690,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 46,
        "userId": 691,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 46,
        "userId": 692,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 46,
        "userId": 693,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 46,
        "userId": 694,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 46,
        "userId": 695,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 46,
        "userId": 696,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 46,
        "userId": 697,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 46,
        "userId": 698,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 46,
        "userId": 699,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 47,
        "userId": 700,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 47,
        "userId": 701,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 47,
        "userId": 702,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 47,
        "userId": 703,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 47,
        "userId": 704,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 47,
        "userId": 705,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 47,
        "userId": 706,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 47,
        "userId": 707,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 47,
        "userId": 708,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 47,
        "userId": 709,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 47,
        "userId": 710,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 47,
        "userId": 711,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 47,
        "userId": 712,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 47,
        "userId": 713,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 47,
        "userId": 714,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 47,
        "userId": 715,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 47,
        "userId": 716,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 47,
        "userId": 717,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 47,
        "userId": 718,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 48,
        "userId": 719,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 48,
        "userId": 720,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 48,
        "userId": 721,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 48,
        "userId": 722,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 48,
        "userId": 723,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 48,
        "userId": 724,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 48,
        "userId": 725,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 48,
        "userId": 726,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 48,
        "userId": 727,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 48,
        "userId": 728,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 48,
        "userId": 729,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 48,
        "userId": 730,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 48,
        "userId": 731,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 48,
        "userId": 732,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 48,
        "userId": 733,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 48,
        "userId": 734,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 48,
        "userId": 735,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 48,
        "userId": 736,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 48,
        "userId": 737,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 49,
        "userId": 738,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 49,
        "userId": 739,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 49,
        "userId": 740,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 49,
        "userId": 741,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 49,
        "userId": 742,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 49,
        "userId": 743,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 49,
        "userId": 744,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 49,
        "userId": 745,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 49,
        "userId": 746,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 49,
        "userId": 747,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 49,
        "userId": 748,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 50,
        "userId": 749,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 50,
        "userId": 750,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 50,
        "userId": 751,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 50,
        "userId": 752,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 50,
        "userId": 753,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 50,
        "userId": 754,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 50,
        "userId": 755,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 50,
        "userId": 756,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 50,
        "userId": 757,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 50,
        "userId": 758,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 50,
        "userId": 759,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 50,
        "userId": 760,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 50,
        "userId": 761,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 50,
        "userId": 762,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 50,
        "userId": 763,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 50,
        "userId": 764,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 50,
        "userId": 765,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 50,
        "userId": 766,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 50,
        "userId": 767,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 51,
        "userId": 768,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 51,
        "userId": 769,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 51,
        "userId": 770,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 51,
        "userId": 771,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 51,
        "userId": 772,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 51,
        "userId": 773,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 51,
        "userId": 774,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 51,
        "userId": 775,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 51,
        "userId": 776,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 51,
        "userId": 777,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 51,
        "userId": 778,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 51,
        "userId": 779,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 51,
        "userId": 780,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 51,
        "userId": 781,
        "review": "We had a terrible experience here. Would not recommend!",
        "stars": 1
      },
      {
        "spotId": 51,
        "userId": 782,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 51,
        "userId": 783,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 51,
        "userId": 784,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 52,
        "userId": 785,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 52,
        "userId": 786,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 52,
        "userId": 787,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 52,
        "userId": 788,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 52,
        "userId": 789,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 52,
        "userId": 790,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 52,
        "userId": 791,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 52,
        "userId": 792,
        "review": "The event space was nice, but we had great difficulties communicating with our host.",
        "stars": 2
      },
      {
        "spotId": 52,
        "userId": 793,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 52,
        "userId": 794,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 52,
        "userId": 795,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 52,
        "userId": 796,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 52,
        "userId": 797,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 53,
        "userId": 798,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 53,
        "userId": 799,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 53,
        "userId": 800,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 53,
        "userId": 801,
        "review": "The space was wonderful, and we would definitely come back again.",
        "stars": 4
      },
      {
        "spotId": 53,
        "userId": 802,
        "review": "Beautiful home and amenities. Would love to come back soon. It was just what we had pictured and wanted for our companies retreat.",
        "stars": 5
      },
      {
        "spotId": 53,
        "userId": 803,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
      {
        "spotId": 53,
        "userId": 804,
        "review": "Our company event was great; however, it did feel a little bit cramped. All in all, pretty good but not great.",
        "stars": 3
      },
    
    
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
