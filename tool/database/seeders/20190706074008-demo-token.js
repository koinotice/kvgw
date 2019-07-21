'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vite_tokens', [{
      tokenId: '1',
      tokenSymbol: 'AK47-001',
      type: 0,
      depositState:"OPEN",
      withdrawState:"OPEN",
      depositAddress:"",
      labelName:"",
      label:"",
      minimumDepositAmount:100,
      confirmationCount:10,
      noticeMsg:"ADF"
    }], {});
  },

  // tokenId: STRING(255),
  // tokenSymbol: {type: STRING(32), allowNull: false},//姓名
  //
  // addressType: {type: INTEGER, defaultValue: "0"}, //0 单地址模式1 通过备注区分地址模式
  // //
  // depositState: {type: STRING(10), defaultValue: "OPEN"},//吃了餐厅个数
  // withdrawState: {type: STRING(10), defaultValue: 'OPEN'},//超越用户数 0~100%
  // depositAddress: {type: STRING(50), allowNull: true},
  // labelName: {type: STRING(32), allowNull: true},
  // label: {type: STRING(32), allowNull: true},
  // minimumDepositAmount: {type: INTEGER, defaultValue: 1},
  // confirmationCount: {type: INTEGER, defaultValue: "20"},
  // noticeMsg: {type: STRING(255), allowNull: true},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
