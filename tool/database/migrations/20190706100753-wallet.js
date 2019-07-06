'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {INTEGER, DATE, STRING} = Sequelize;
    await queryInterface.createTable('wallets', {

      id: {type: INTEGER, primaryKey: true, autoIncrement: true},
      walletAddress: {type:STRING(255),allowNull: false,unique:true},
      erc20Address: {type: STRING(250), allowNull: false,unique:true},//姓名
      pk: {type: STRING(100), allowNull: false},//姓名

      index: {type: INTEGER, defaultValue: "0"}, //0 单地址模式1 通过备注区分地址模式

      createdAt: DATE,//创建时间
      updatedAt: DATE,//更新时间
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('wallets');
  }
};


