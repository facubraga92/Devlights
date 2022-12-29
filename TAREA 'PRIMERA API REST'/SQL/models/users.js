const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    adress: DataTypes.STRING
  },{
    freezeTableName: true //Esto es para evitar que por defecto sequelize haga plural y le agregue una 's' al nombre de las tablas;
  });


  module.exports = Users;