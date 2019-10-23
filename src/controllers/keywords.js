
const { categories } = require("../models/categories")

const defaultError = (res, error) => {
   res.json({ error: true, message: error.message })
}

const updateOne = async (req, res, query) => {
   let condition = { cat: req.params.cat }
   try { res.json(await categories.updateOne(condition, query)) }
   catch (error) { defaultError(res, error) }
}

exports.get = async (req, res) => {
   try {
      let docRes = await categories.findOne({ cat: req.params.cat }, 'keywords')
      res.json(docRes.keywords)
   }
   catch (error) { defaultError(res, error) }
}

exports.create = async (req, res) => {
   updateOne(req, res, { keywords: req.body })
}

exports.patch = async (req, res) => {
   updateOne(req, res, { $addToSet: { keywords: req.body } })
}

exports.delete = async (req, res) => {
   console.log(req.body);
   updateOne(req, res, { $pullAll: { keywords: req.body } })
}
