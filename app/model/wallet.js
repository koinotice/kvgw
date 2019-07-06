'use strict';

module.exports = app => {
    const {STRING, INTEGER, DATE} = app.Sequelize;

    const Wallet = app.model.define('wallets', {
        id:{type: INTEGER, primaryKey: true, autoIncrement: true},

        walletAddress:
            {
                type: 'CHARACTER VARYING(255)',
                allowNull: true,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        erc20Address:
            {
                type: 'CHARACTER VARYING(250)',
                allowNull: false,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        pk:
            {
                type: 'CHARACTER VARYING(250)',
                allowNull: false,
                defaultValue: null,
                special: [],
                primaryKey: false
            },
        index:
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
    });

    return Wallet;
};
