const {Sequelize} = require("sequelize");
const createDb = new Sequelize(
    database="test-db", 
    username='user',
    password='password',
    options = {
        dialect: "sqlite",
        host: './config/db.sqlite',
    }
);

module.exports = createDb;