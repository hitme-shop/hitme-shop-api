const collection = require("../models/products");
//const { getSubWords } = require("../helpers");

const S200 = {
   status: 200,
   statusText: "OK"
}
const S404 = {
   status: 404,
   statusText: "NOT FOUND"
}
const S500 = {
   statusText: 500,
   statusText: "INTERNAL SERVER ERROR"
}


exports.get = async (req, res) => {
   try {
      /** Regex of keyword */
      let keyword = new RegExp(req.params.keyword, "i");

      /** declaration of query */
      let query = collection.find({ title: keyword });

      /** limiting search result */
      let limit = req.query.limit || 20;
      query = query.limit(limit);

      /** projection */
      let deselect = "-__v -title_low -createdAt -updatedAt -compared"
      query = query.select(deselect)

      /** Executing query */
      let response = await query;

      /** Sending response */
      if (response.length === 0) {
         res.json({
            ...S404,
            data: "Products not found!"
         })
      } else {
         res.json({
            ...S200,
            results: response.length,
            data: response
         })
      }
   } catch (error) {
      res.json({
         ...S500,
         data: error.message
      });
   }
};


exports.suggestions = async (req, res) => {
   try {

      /** Regex of keyword */
      let keyword = new RegExp(req.params.keyword, "i");

      /** declaration of query */
      let query = collection.find({ title: keyword });

      /** limiting search result */
      let limit = req.query.limit || 10;
      query = query.limit(limit);

      /** projection */
      let select = "title"
      query = query.select(select)

      /** Executing query */
      let response = await query;

      if (response.length !== 0) {
         let suggs = response.map(r => r.title)
         res.json({
            ...S200,
            data: suggs
         })
      } else {
         res.json({
            ...S404,
            data: response
         })
      }

   } catch (error) {
      res.json({
         ...S500,
         data: error.message
      });
   }
}