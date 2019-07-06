'use strict';

module.exports = app => {
    const {STRING, INTEGER, DATE} = app.Sequelize;

    const Token = app.model.define('tokens', {

        id: {type: INTEGER, primaryKey: true, autoIncrement: true},//店铺id

        tokenId:
            {
                type: 'CHARACTER VARYING(255)',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        tokenSymbol:
            {
                type: 'CHARACTER VARYING(32)',
                allowNull: false,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        type:
            {
                type: 'INTEGER',
                allowNull: true,
                defaultValue: '0',
                special: [],
                primaryKey: false
            },
        depositState:
            {
                type: 'CHARACTER VARYING(10)',
                allowNull: true,
                defaultValue: 'OPEN',
                special: [],
                primaryKey: false
            },
        withdrawState:
            {
                type: 'CHARACTER VARYING(10)',
                allowNull: true,
                defaultValue: 'OPEN',
                special: [],
                primaryKey: false
            },
        depositAddress:
            {
                type: 'CHARACTER VARYING(50)',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        labelName:
            {
                type: 'CHARACTER VARYING(32)',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        label:
            {
                type: 'CHARACTER VARYING(32)',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        minimumDepositAmount:
            {
                type: 'INTEGER',
                allowNull: true,
                defaultValue: '1',
                special: [],
                primaryKey: false
            },
        confirmationCount:
            {
                type: 'INTEGER',
                allowNull: true,
                defaultValue: '20',
                special: [],
                primaryKey: false
            },
        noticeMsg:
            {
                type: 'CHARACTER VARYING(255)',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        createdAt:{
                type: 'TIMESTAMP WITH TIME ZONE',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        updatedAt:{
                type: 'TIMESTAMP WITH TIME ZONE',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            }
    })


    return Token;
}
;
