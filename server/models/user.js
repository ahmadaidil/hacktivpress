'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required:true},
    secretKey: String
})

let User = mongoose.model('user', userSchema);

module.exports = User;
