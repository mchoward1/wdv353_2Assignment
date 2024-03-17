const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const makeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a make name."],
        unique: true,
        trim: true,
        maxlength: [20, "Make name is too long."]
    },
    yearEstablished: {
        type: Number,
        required: [true, "Please enter the year this company was established."],
        max: 2024,
        maxlength: 4
    },
    country: {
        type: String,
        required: true,
        maxlength: [56, "Country name is too long."]
    },
});
makeSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Make", makeSchema);