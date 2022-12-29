const mongoose = require('mongoose');
const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: String,
    lastname: String,
    age: Number,
    adress: String
})

const usersModel = mongoose.model('users',usersSchema)  //aca pongo el nombre de la COLLECTION


module.exports = usersModel