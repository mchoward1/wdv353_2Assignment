const router = require('express').Router();
const {getAllMakes,
    getMakeById,
    createMake,
    updateMake,
    deleteMake} = require("../controller/makeController"); 

router.get('/', getAllMakes);

router.get("/:id", getMakeById);

router.post('/', createMake);

router.put("/:id", updateMake);

router.delete("/:id", deleteMake);

module.exports = router;