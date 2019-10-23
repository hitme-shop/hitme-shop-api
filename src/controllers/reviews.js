
const reviews = require('../models/reviews')

exports.getAll = async (req, res) => {
   try {

      /** Query */
      let query = reviews.find()

      /** Pagination */
      let page = req.query.page || 1
      let limit = 15, skip = (page - 1) * limit
      query = query.skip(skip).limit(limit)

      /** Projection */
      let projections = "title src website cats"
      query = query.select(projections)

      /** Executing query */
      let docRes = await query

      /** Sending response */
      res.json({ page: page, data: docRes })

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