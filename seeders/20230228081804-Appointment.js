'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {id: 1,service_id: 1,user_id: 2, doctor_id: 1,comment: "First session",createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 2,service_id: 2,user_id: 2,doctor_id: 3,comment: "Second session",createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
    ],{});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
