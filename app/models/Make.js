const mongoose = require('mongoose');

const makeSchema = new mongoose.Schema({
    name: String,
    yearEstablished: Number,
    country: String,
});

module.exports = mongoose.model("Make", makeSchema);