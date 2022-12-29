const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


const Roles = sequelize.define('Roles', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  },{
    freezeTableName: true //Esto es para evitar que por defecto sequelize haga plural y le agregue una 's' al nombre de las tablas;
  });


  module.exports = Roles;