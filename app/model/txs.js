'use strict';

module.exports = app => {
    const {STRING, INTEGER, DATE, DECIMAL, TEXT} = app.Sequelize;

    const Txs = app.model.define('txs', {
        id: {type: INTEGER, primaryKey: true, autoIncrement: true},//店铺id

        walletAddress:
            {
                type: 'CHARACTER VARYING(255)',
                allowNull: false,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        tokenId:
            {
                type: 'CHARACTER VARYING(250)',
                allowNull: false,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        inTxHash:
            {
                type: 'CHARACTER VARYING(250)',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        outTxHash:
            {
                type: 'CHARACTER VARYING(250)',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        amount:
            {
                type: 'CHARACTER VARYING(250)',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        fee:
            {
                type: 'CHARACTER VARYING(250)',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        state:
            {
                type: 'CHARACTER VARYING(250)',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        dateTime:
            {
                type: 'CHARACTER VARYING(250)',
                allowNull: true,
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
        createdAt:
            {
                type: 'TIMESTAMP WITH TIME ZONE',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        updatedAt:
            {
                type: 'TIMESTAMP WITH TIME ZONE',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            }
    })

    return Txs;
};
