require('./config');
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/backend');

const Schema = mongoose.Schema;
// Criação do Schema
const picpaySchema = new Schema({
    name: String,
    description: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number
});

module.exports = picpaySchema;