const Make = require("../models/Make");

const getAllMakes = async (req,res) => {
    const make = await Make.find({});
    res.status(200).json({
            data: make,
            success: true,
            message: req.method + " - Request to Make endpoint",
    });
};

const getMakeById = (req,res) => {
    const {id} = req.params;
    res.status(200).json({
            id,
            success: true,
            message: req.method + " - Request to Make endpoint",
        });
};

const createMake = async (req,res) => {
    const make = req.body;
    const newMake = await Make.create(make);
    console.log("data >>>", newMake);
    res.status(200).json({
        success: true,
        message: req.method + " - Request to Make endpoint",
    });
};

const updateMake = async (req,res) => {
    const {id} = req.params;
    const make = await Make.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({
            data: make,
            success: true,
            message: req.method + " - Request to Make endpoint",
        });
};

const deleteMake = (req,res) => {
    const {id} = req.params;
    res.status(200).json({
            id,
            success: true,
            message: req.method + " - Request to Make endpoint",
        });
};

module.exports = {
    getAllMakes,
    getMakeById,
    createMake,
    updateMake,
    deleteMake
};