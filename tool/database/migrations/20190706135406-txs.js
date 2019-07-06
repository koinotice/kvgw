'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {INTEGER, DATE, STRING} = Sequelize;
    await queryInterface.createTable('txs', {

      id: {type: INTEGER, primaryKey: true, autoIncrement: true},
      walletAddress: {type:STRING(255),allowNull: false},
      tokenId: {type: STRING(250), allowNull: false},//姓名
      inTxHash: {type: STRING(250), allowNull: true},//姓名
      outTxHash: {type: STRING(250), allowNull: true},//姓名
      amount: {type: STRING(250), allowNull: true},//姓名
      fee: {type: STRING(250), allowNull: true},//姓名
      state: {type: STRING(250), allowNull: true},//姓名
      dateTime: {type: STRING(250), allowNull: true},//姓名
      type: {type: INTEGER, defaultValue: "0"}, //0 充值 1 提现

      createdAt: DATE,//创建时间
      updatedAt: DATE,//更新时间
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('txs');
  }
};


