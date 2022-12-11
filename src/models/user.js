import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/db";

class User extends Model {};

User.init(
    {
        Name: { type : DataTypes.STRING },
        Email: { type : DataTypes.STRING },
        password: { type : DataTypes.STRING}
    },
    {
        sequelize, modelName: 'user'
    }
);

module.exports = User;