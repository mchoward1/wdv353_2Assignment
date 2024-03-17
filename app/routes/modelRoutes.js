const router = require('express').Router();
const {getAllModels,
    getModelById,
    createModel,
    updateModel,
    deleteModel} = require("../controller/modelController"); 

router.get('/', getAllModels);

router.get("/:id", getModelById);

router.post('/', createModel);

router.put("/:id", updateModel);

router.delete("/:id", deleteModel);

module.exports = router;