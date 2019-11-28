const { keysInReview } = require("../models/categories");

exports.getAll = async (_, res) => {
   let select = "mCat sCat cat keywords";
   let docRes = await keysInReview.find({}, select).limit(5)
   res.send(docRes);
};

exports.create = async (req, res) => {
   try {
      await keysInReview.init();
      let createRes = await keysInReview.create(req.body);
      res.json(createRes);
   } catch (error) {
      let data = { ...req.body };
      let conditions = { mCat: data.mCat, sCat: data.sCat, cat: data.cat };
      let updateRes = await keysInReview.updateOne(conditions, {
         $addToSet: { keywords: data.keywords }
      });
      res.json(updateRes);
   }
};
exports.deleteAll = async (req, res) => {
   try {
      let delRes = await keysInReview.deleteMany();
      res.json(delRes);
   } catch (error) {
      res.json({ error: true, message: error.message });
   }
};

exports.get = async (req, res) => { };

exports.update = async (req, res) => { };

exports.delete = async (req, res) => {
   if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      try {
         let docRes = await keysInReview.deleteOne({ _id: req.params.id });
         res.json(docRes);
      } catch (error) {
         res.json({ error: true, message: error.message });
      }
   } else {
      res.json({ error: true, message: "Invalid object id" });
   }
};
