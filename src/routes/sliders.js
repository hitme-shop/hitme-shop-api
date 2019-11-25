/** PACKAGE IMPORTS */
const express = require("express");
const router = express.Router();

const sliders = require("../controllers/sliders");

/** Categories */
router
   .route("/")
   .get(sliders.getAll)
   .post(sliders.create);

router
   .route("/:id")
   .get(sliders.get)
   .delete(sliders.delete);

/** 
 * @Route /sliders/website/Pickaboo */
router
   .route("/:filterBy/:keyword")
   .get(sliders.getFiltered)

/** Exporting router */
module.exports = router;
