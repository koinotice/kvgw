// var SequelizeAuto = require('sequelize-auto')
// const auto = new SequelizeAuto('pmker', 'pmker', 'Zheli123', {
//     host: 'localhost',
//     dialect: 'postgres',
//     directory: false, // prevents the program from writing to disk
//     port: 5432,
//     additional: {
//         timestamps: false
//         //...
//     },
//     //tables: ['table1', 'table2', 'table3']
//     //...
// })
// auto.run(function (err) {
//     if (err) throw err;
//
//     console.log(auto.tables); // table list
//     console.log(auto.foreignKeys); // foreign key list
// });


const EggSequelizeAuto = require('egg-sequelize-auto')
const auto = new EggSequelizeAuto('pmker', 'pmker', 'Zheli123', {
    host: 'localhost',
    dialect: 'postgres',
    directory: false, // prevents the program from writing to disk
    port: 5432,
    additional: {
        timestamps: false
        //...
    }});

// start
auto.run(function (err) {
    if (err) throw err;

    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});

