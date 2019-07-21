'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('wallets', [
            {
                eth_address: '0x1daC3ba96a2d6CB8a4C50022d3e103De1E9F6d8B',
                vite_address: 0,

            }  ,
            {
                eth_address: '0x1560cB7d3a6fcA7b969BEBB70d7b8dF9221D94a6',
                vite_address: 1,

            }
        ], {});
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
