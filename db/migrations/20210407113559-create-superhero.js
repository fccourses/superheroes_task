'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('superheros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      real_name: {
        field: 'real_name',
        allowNull: false,
        type: Sequelize.STRING,
      },
      origin_description: {
        field: 'origin_description',
        allowNull: false,
        type: Sequelize.TEXT,
      },
      catch_phrase: {
        allowNull: false,
        field: 'catch_phrase',
        type: Sequelize.STRING,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('superheros');
  },
};
