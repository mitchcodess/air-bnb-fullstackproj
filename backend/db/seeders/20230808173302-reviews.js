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
