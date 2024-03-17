const express = require('express');
const router = express.Router();
const makeRoutes = require('./makeRoutes');
const modelRoutes = require('./modelRoutes');

router.get("/", (req,res) => {
    res
        .status(200)
        .json({success: true, message: req.method + " - Request made"});
});

router.use("/make", makeRoutes);
router.use("/model", modelRoutes);
module.exports = router;