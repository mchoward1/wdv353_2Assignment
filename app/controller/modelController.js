const Model = require("../models/Model");
const Make = require('../models/Make');
const Messages = require("../messages/messages");

const getAllModels = async (req,res) => {
    try {
        let querString = JSON.stringify(req.query);

        querString = querString.replace(
            /\b(gt|gte|lt|lte)\b/g,
            (match) => `$${match}`
        ); 

        let query = Model.find(JSON.parse(querString));

        if (req.query.select) {
            const fields = req.query.select.split(',').join(' ');
            query = Model.find({}).select(fields);
        }

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = Model.find({}).sort(sortBy);
        }

        const model = await query
            .populate("make", "name")
            .select("name type yearReleased type inProduction");
        res.status(200).json({
                data: model,
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

const getModelById = async (req,res) => {
    const {id} = req.params;
    try {
        const model = await Model.findById(id)
        .populate("make", "name")
        .select("name type yearReleased type inProduction")
        .exec();
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
            res.status(500).json({message: Messages.model_not_found});
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
            res.status(422).json({message: Messages.unable_to_create});
        } else {
            console.error(error);
            res.status(500).json({message: Messages.unable_to_create});
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
            res.status(422).json({message: Messages.unable_to_update});
        } else {
            console.error(error);
            res.status(500).json({message: Messages.unable_to_update});
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
            res.status(500).json({message: Messages.unable_to_delete});
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