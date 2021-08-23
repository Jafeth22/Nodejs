'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'John Doe',
        lastName: "false",
        photo: "1234-5678",
        email: "email@test.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },{
        firstname: 'Testname',
        lastName: "Testlastname",
        photo: "9876-5432",
        email: "test@email.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
