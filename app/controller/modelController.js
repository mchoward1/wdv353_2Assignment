const Model = require("../models/Model");

const getAllModels = async (req,res) => {
    const model = await Model.find({});
    res.status(200).json({
            data: model,
            success: true,
            message: req.method + " - Request to Make endpoint",
    });
};

const getModelById = async (req,res) => {
    const {id} = req.params;
    const model = await Model.findById(id).exec();
    res.status(200).json({
            data: model,
            success: true,
            message: req.method + " - Request to Make endpoint"
        });
};

const createModel = async (req,res) => {
    const model = req.body;
    const newModel = await Model.create(model);
    console.log("data >>>", newModel);
    res.status(200).json({
            success: true,
            message: req.method + " - Request to Make endpoint",
    });
};

const updateModel = async (req,res) => {
    const {id} = req.params;
    const model = await Model.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({
            data: model,
            success: true,
            message: req.method + " - Request to Make endpoint",
        });
};

const deleteModel = async (req,res) => {
    const {id} = req.params;
    const model = await Model.findByIdAndDelete(id);
    res.status(200).json({
            success: true,
            message: req.method + " - Request to Make endpoint",
        });
};

module.exports = {
    getAllModels,
    getModelById,
    createModel,
    updateModel,
    deleteModel
};