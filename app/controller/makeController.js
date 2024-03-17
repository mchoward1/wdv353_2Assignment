const Make = require("../models/Make");

const getAllMakes = async (req,res) => {
    try {
        const make = await Make.find({});
        res.status(200).json({
                data: make,
                success: true,
                message: req.method + " - Request to Make endpoint",
        });
    } catch (error) {
        if (error.name == "ValidatorError") {
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        };
    };
};

const getMakeById = async (req,res) => {
    const {id} = req.params;
    try {
        const make = await Make.findById(id).exec();
        res.status(200).json({
                data: make,
                success: true,
                message: req.method + " - Request to Make endpoint",
            });
    } catch (error) {
        if (error.name == "ValidatorError") {
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        };
    };
};

const createMake = async (req,res) => {
    const make = req.body;
    try {
        const newMake = await Make.create(make);
        console.log("data >>>", newMake);
        res.status(200).json({
            success: true,
            message: req.method + " - Request to Make endpoint",
        });
    } catch (error) {
        if (error.name == "ValidatorError") {
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        };
    };
};

const updateMake = async (req,res) => {
    const {id} = req.params;
    try {
        const make = await Make.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({
                data: make,
                success: true,
                message: req.method + " - Request to Make endpoint",
            });
    } catch (error) {
        if (error.name == "ValidatorError") {
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        };
    };
};

const deleteMake = async (req,res) => {
    const {id} = req.params;
    try {
        const make = await Make.findByIdAndDelete(id);
        res.status(200).json({
                success: true,
                message: req.method + " - Request to Make endpoint",
            });
    } catch (error) {
        if (error.name == "ValidatorError") {
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        };
    };
};

module.exports = {
    getAllMakes,
    getMakeById,
    createMake,
    updateMake,
    deleteMake
};