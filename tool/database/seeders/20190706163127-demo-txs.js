'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('txs', [
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '2abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '3abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '4abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '5abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '6abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '7abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '8abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '9abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '10abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '11abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '12abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '13abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '14abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '15abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '16abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '17abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '18abc' },
            { tokenId: '1', walletAddress: '1', type: 1, inTxHash: '19abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '1abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '2abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '3abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '4abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '5abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '6abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '7abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '8abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '9abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '10abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '11abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '12abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '13abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '14abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '15abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '16abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '17abc' },
            { tokenId: '1', walletAddress: '1', type: 0, inTxHash: '18abc' }





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
