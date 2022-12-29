const mongoose = require('mongoose');
const Schema = mongoose.Schema

const rolesSchema = new Schema({
    name: String,
    lastname: String,
    age: Number,
    adress: String
})

const rolesModel = mongoose.model('roles',rolesSchema)  //aca pongo el nombre de la COLLECTION


module.exports = rolesModel