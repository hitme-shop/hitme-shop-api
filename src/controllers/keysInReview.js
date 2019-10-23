
const { keysInReview } = require("../models/categories")

exports.getAll = async (req, res) => {
   let select = "mCat sCat cat keywords"
   let docRes = await keysInReview.find({}, select)
   res.send(docRes)
}

exports.get = async (req, res) => {

}

exports.update = async (req, res) => {

}

exports.delete = async (req, res) => {
   if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      try {
         let docRes = await keysInReview.deleteOne({ _id: req.params.id })
         res.json(docRes)
      } catch (error) {
         res.json({ error: true, message: error.message })
      }
   } else {
      res.json({ error: true, message: "Invalid object id" })
   }
}