'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {INTEGER, DATE, STRING} = Sequelize;
    await queryInterface.createTable('dex_tasktxs', {

      id: {type: INTEGER, primaryKey: true, autoIncrement: true},
      transaction_hash: {type: STRING(250), allowNull: true},
      status: {type: STRING(250), allowNull: true},
      from: {type: STRING(250), allowNull: true},
      to: {type: STRING(250), allowNull: true},
      amount: {type: STRING(250), allowNull: true},
      createdAt: DATE,//创建时间
      updatedAt: DATE,//更新时间

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dex_tasktxs');
  }
};


