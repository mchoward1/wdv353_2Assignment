const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: String,
    type: String,
    yearReleased: Number,
    inProduction: String,
});

module.exports = mongoose.model("Model", modelSchema);