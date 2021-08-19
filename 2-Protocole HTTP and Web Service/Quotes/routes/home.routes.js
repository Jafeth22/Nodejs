const router = require('express').Router(); //.Router = To convert to express route
const { HomeController } = require("../controllers")

router.get("/", HomeController.index);
router.get("/about", HomeController.about);

module.exports = router;