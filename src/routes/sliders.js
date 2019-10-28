
/** PACKAGE IMPORTS */
const express = require('express')
const router = express.Router()

const sliders = require("../controllers/sliders")

/** Categories */
router.route("/")
   .get(sliders.getAll)
   .post(sliders.create)

router.route("/:id")
   .get(sliders.get)
   .delete(sliders.delete)

/** Exporting router */
module.exports = router