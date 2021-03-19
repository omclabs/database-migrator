'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'posts',
      [
        {
          title: faker.lorem.words(5),
          content: faker.lorem.words(20),
          author_id: Math.floor(Math.random() * 3) + 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: faker.lorem.words(5),
          content: faker.lorem.words(20),
          author_id: Math.floor(Math.random() * 3) + 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: faker.lorem.words(5),
          content: faker.lorem.words(20),
          author_id: Math.floor(Math.random() * 3) + 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: faker.lorem.words(5),
          content: faker.lorem.words(20),
          author_id: Math.floor(Math.random() * 3) + 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: faker.lorem.words(5),
          content: faker.lorem.words(20),
          author_id: Math.floor(Math.random() * 3) + 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: faker.lorem.words(5),
          content: faker.lorem.words(20),
          author_id: Math.floor(Math.random() * 3) + 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: faker.lorem.words(5),
          content: faker.lorem.words(20),
          author_id: Math.floor(Math.random() * 3) + 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
