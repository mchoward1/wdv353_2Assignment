const express = require('express');
const router = express.Router();
const makeRoutes = require('./makeRouter');

router.get("/", (req,res) => {
    res
        .status(200)
        .json({success: true, message: req.method + " - Request made"});
});

router.use("/make", makeRoutes);
module.exports = router;