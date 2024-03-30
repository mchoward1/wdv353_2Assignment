const Make = require("../models/Make");
const Messages = require("../messages/messages")

const getAllMakes = async (req,res) => {
    try {
        const make = await Make.find(req.query);
        res.status(200).json({
                data: make,
                success: true,
                message: req.method + " - Request to Make endpoint",
        });
    } catch (error) {
        if (error.name == "ValidatorError") {
            console.error("Error Validating!", error);
            res.status(422).json({message: Messages.failed_to_populate});
        } else {
            console.error(error);
            res.status(500).json({message: Messages.failed_to_populate});
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
            res.status(422).json({message: Messages.make_not_found});
        } else {
            console.error(error);
            res.status(500).json({message: Messages.make_not_found});
        };
    };
};

const createMake = async (req,res) => {
    const make = req.body;
    try {
        const newMake = await Make.create(make);
        console.log("data >>>", newMake);
        res.status(201).json({
            success: true,
            message: req.method + " - Request to Make endpoint",
        });
    } catch (error) {
        if (error.name == "ValidatorError") {
            console.error("Error Validating!", error);
            res.status(422).json({message: Messages.unable_to_create});
        } else {
            console.error(error);
            res.status(500).json({message: Messages.unable_to_create});
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
            res.status(422).json({message: Messages.unable_to_update});
        } else {
            console.error(error);
            res.status(500).json({message: Messages.unable_to_update});
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
            res.status(422).json({message: Messages.unable_to_delete});
        } else {
            console.error(error);
            res.status(500).json({message: Messages.unable_to_delete});
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