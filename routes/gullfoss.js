const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("gullfoss");
});

module.exports = router;