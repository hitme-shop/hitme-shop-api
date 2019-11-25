
const products = require('../models/products')

const defaultError = (res, error) => {
   res.json({ error: true, message: error.message })
}

exports.getAll = async (_, res) => {
   try {
      let projection = "title src url sPrice oPrice discount rating ratingCount website flag cat"
      let docRes = await products.find({}, projection)
      res.json({ results: docRes.length, data: docRes })
   } catch (error) { defaultError(res, error) }
}

exports.create = async (req, res) => {
   try {
      await products.init()
      let docRes = await products.create(req.body)
      res.json(docRes)
   } catch (error) { defaultError(res, { message: "DUPLICATE_PRODUCT" }) }
}

exports.get = async (req, res) => {
   try {
      let docRes = await products.findOne({ _id: req.params.id })
      res.json(docRes)
   } catch (error) { defaultError(res, error) }
}
exports.update = async (_, res) => {
   try {
      res.json("patch")
   } catch (error) { defaultError(res, error) }
}

exports.delete = async (req, res) => {
   try {
      let docRes = await products.deleteOne({ _id: req.params.id })
      res.json(docRes)
   } catch (error) { defaultError(res, error) }
}

exports.deleteAll = async (_, res) => {
   try {
      let docRes = await products.deleteMany({})
      res.json(docRes)
   } catch (error) { defaultError(res, error) }
}

exports.compareAll = async (_, res) => {
   try {

      let proCount = await products.countDocuments()
      console.log(proCount);
      let page = 1
      let limit = 100

      console.log(proCount/limit);
   
      // while ( proCount / 100 ) {
         
      // }
      
      res.json('Compare All')

   } catch (error) { defaultError(res, error) }
}

exports.compare = async (req, res) => {
   try {

      console.log(req.params.title);

      (await products.find()).forEach(function (pro) {
         console.log(pro);
      })

      res.json('docRes')
   } catch (error) { defaultError(res, error) }
}