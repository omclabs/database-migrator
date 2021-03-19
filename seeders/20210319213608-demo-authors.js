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
      'authors',
      [
        {
          id: 1,
          name: faker.name.findName(),
          email: faker.internet.email(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: faker.name.findName(),
          email: faker.internet.email(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: faker.name.findName(),
          email: faker.internet.email(),
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
