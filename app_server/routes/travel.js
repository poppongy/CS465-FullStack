var express = require("express");
var router = express.Router();
const controller = require("../Controllers/travel");

/* GET home page. */
router.get("/", controller.travel);

module.exports = router;
