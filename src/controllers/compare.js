const products = require('../models/products')
const { compareTwoStrings , findBestMatch } = require('string-similarity')

const defaultError = (res, error) => {
   res.json({ error: true, message: error.message })
}

exports.compareAll = async (_, res) => {
   try {

      let started = Date.now()

      let allProducts = await products.find().select('title _id')
      allProducts = allProducts.filter(pro => pro.title !== "")
      
      console.log(`\nProducts : ${allProducts.length}`);

      let compared = []

      allProducts.forEach(ol => {
         let com = { target:ol , matched : [] }
         allProducts.forEach(il => {
            if ( ol.title !== il.title && compareTwoStrings(ol.title, il.title) >= 0.8) {
               com.matched.push(il)
            }
         })
         compared.push(com)
      })

      res.json(compared)
      console.log(`Time taken : ${(Date.now() - started) / 1000}s\n` );

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

// let proCount = await products.countDocuments()
// let page = 1
// let limit = 100
// let lastPage = Math.round(proCount / limit)
// while (page <= lastPage) {
//    let skip = (page - 1) * limit
//    let proRes = await products.find().skip(skip).limit(limit)
//    console.log(proRes.length);
//    page++
// }