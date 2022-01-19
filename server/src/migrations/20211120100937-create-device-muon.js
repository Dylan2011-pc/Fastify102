'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DeviceMuons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      datetra: {
        type: Sequelize.DATE
      },
      DeviceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Devices',
          key: 'id', 
      }
      },
      numberm: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      }, trangthai: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DeviceMuons');
  }
};