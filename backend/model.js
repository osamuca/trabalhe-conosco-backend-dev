const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const picpaySchema = new Schema({
    nome:  String,
    valor: Number, // um valor qualquer
});

module.exports = mongoose.model('picpay', picpaySchema);
