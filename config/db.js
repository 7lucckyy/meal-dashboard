const sequelize = require('sequelize');


const db = new sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
})


module.exports = db;
