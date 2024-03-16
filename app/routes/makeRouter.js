const router = require('express').Router();

router.get('/', (req,res) => {
    res
        .status(200)
        .json({
            success: true,
            message: req.method + " - Request to Make endpoint",
    });
});

router.get("/:id", (req,res) => {
    const {id} = req.params;
    res.status(200).json({
            id,
            success: true,
            message: req.method + " - Request to Make endpoint",
        });
});

router.post('/', (req,res) => {
    res
        .status(200)
        .json({
            success: true,
            message: req.method + " - Request to Make endpoint",
    });
});

router.put("/:id", (req,res) => {
    const {id} = req.params;
    res.status(200).json({
            id,
            success: true,
            message: req.method + " - Request to Make endpoint",
        });
});

router.delete("/:id", (req,res) => {
    const {id} = req.params;
    res.status(200).json({
            id,
            success: true,
            message: req.method + " - Request to Make endpoint",
        });
});

module.exports = router;