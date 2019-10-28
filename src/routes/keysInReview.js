
const express = require("express")
const router = express.Router()

const controller = require("../controllers/keysInReview")

router.route("/")
   .get(controller.getAll)
   .post(controller.create)

router.route("/:id")
   .get(controller.get)
   .delete(controller.delete)

module.exports = router