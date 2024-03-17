const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const modelSchema = new mongoose.Schema({
    make: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Make'
    },
    name: {
        type: String,
        required: [true, "Please enter a model name"],
        unique: true,
        trim: true,
        maxlength: [40, "Model name is too long."]
    },
    type: {
        type: String,
        required: true,
        enum: [
            "Car",
            "Truck",
            "SUV",
            "Van",
            "Other",
        ],
    },
    yearReleased: {
        type: Number,
        max: 2024,
        maxlength: 4
    },
    inProduction: {
        type: String,
        required: true,
        enum: [
            "Yes",
            "No"
        ]
    },
});
modelSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Model", modelSchema);