const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema({
   title: String,
   src: String,
   url: {
      type: String,
      required: [true, "An url is required!"],
      unique: true
   },
   sPrice: Number,
   oPrice: Number,
   rating: { type: Number, default: 0 },
   ratingCount: { type: Number, default: 0 },
   discount: Number,
   flag: String,
   website: String,
   cats: {
      type: Array,
      required: false
   },
   createdAt: { type: Date, default: Date.now }
})

const proInReview = mongoose.model('pro-in-reviews', reviewsSchema)

module.exports = proInReview