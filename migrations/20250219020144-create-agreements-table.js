'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agreements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: { // Antes era 'order'
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: { // Antes era 'key'
        type: Sequelize.STRING,
        allowNull: false,
      },
      typeId: { // Nueva columna agregada en la actualización
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Agreements');
  },
};
