const Model = require("../models/Model");

const getAllModels = async (req,res) => {
    try {
        const model = await Model.find({});
        res.status(200).json({
                data: model,
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

const getModelById = async (req,res) => {
    const {id} = req.params;
    try {
        const model = await Model.findById(id).exec();
        res.status(200).json({
                data: model,
                success: true,
                message: req.method + " - Request to Make endpoint"
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

const createModel = async (req,res) => {
    const model = req.body;
    try {
        const newModel = await Model.create(model);
        console.log("data >>>", newModel);
        res.status(201).json({
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

const updateModel = async (req,res) => {
    const {id} = req.params;
    try {
        const model = await Model.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({
                data: model,
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

const deleteModel = async (req,res) => {
    const {id} = req.params;
    try {
        const model = await Model.findByIdAndDelete(id);
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
    getAllModels,
    getModelById,
    createModel,
    updateModel,
    deleteModel
};