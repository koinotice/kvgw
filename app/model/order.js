'use strict';

module.exports = app => {
    const {STRING, INTEGER, DATE} = app.Sequelize;

    const Order = app.model.define('orders', {
        id: {type: INTEGER, primaryKey: true, autoIncrement: true},
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
            }

    });

    return Order;
};
