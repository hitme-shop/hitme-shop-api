/** PACKAGE IMPORTS */
const express = require('express')
const router = express.Router()

const controller = require("../controllers/keywords")

router.route("/:cat")
   .get(controller.get)
   .post(controller.create)
   .patch(controller.patch)
   .delete(controller.delete)

module.exports = router