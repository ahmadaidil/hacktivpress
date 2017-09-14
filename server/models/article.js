'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let questionSchema = Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'user'}
}, {
    timestamps: true
})

let Question = mongoose.model('question', questionSchema);

module.exports = Question;
