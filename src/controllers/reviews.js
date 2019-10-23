
const reviews = require('../models/reviews')

exports.getAll = async (_, res) => {
   try {
      let fields = "title src website cats"
      let docRes = await reviews.find({},fields)
      res.json(docRes)
   } catch (error) {
      res.json({
         error: true,
         message: error.message
      })
   }
}

exports.get = async (req, res) => {
   try {
      let docRes = await reviews.findOne({ _id: req.params.id })
      res.json(docRes)
   } catch (error) {
      res.json({
         error: true,
         message: error.message
      })
   }
}

exports.delete = async (req, res) => {
   try {
      let docRes = await reviews.deleteOne({ _id: req.params.id })
      res.json(docRes)
   } catch (error) {
      res.json({
         error: true,
         message: error.message
      })
   }
}