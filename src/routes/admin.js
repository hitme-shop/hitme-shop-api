/** PACKAGE IMPORTS */
const express = require('express')
const router = express.Router()

const Admin = require("../controllers/admin")

router.route("/").get(Admin.initDashBoard)

module.exports = router