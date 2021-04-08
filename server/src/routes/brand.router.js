var express = require("express")
var router = express.Router()
const brand = require("../controllers/brand.controller")

router.get("/brands/:brandClassify", brand.brandPagination)

module.exports = router
