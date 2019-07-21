'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {INTEGER, DATE, STRING} = Sequelize;
    await queryInterface.createTable('wallets', {

      id: {type: INTEGER, primaryKey: true, autoIncrement: true},
      eth_address: {type: STRING(250), allowNull: false,unique:true},//姓名

      vite_address: {type:STRING(255),allowNull: true,unique:true},


      createdAt: DATE,//创建时间
      updatedAt: DATE,//更新时间
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('wallets');
  }
};


