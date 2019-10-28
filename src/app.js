/** PACKAGE IMPORTS */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

/** Routers */
const categoryRoute = require('./routes/categories')
const keywordsRoute = require("./routes/keywords")
const excludesRoute = require('./routes/excludes')
const reviewsRoute = require('./routes/reviews')
const productsRoute = require('./routes/products')
const slidersRoute = require('./routes/sliders')
const keysInReview = require("./routes/keysInReview")
const scrprLog = require("./routes/scrapper-log")
const scrprConfig = require("./routes/scrapper-config")

/** APP INSTANCE */
const app = express()

/** MIDDLEWARES */
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

/** ROUTES */
app.use(express.static("public"))
app.use("/v1/categories", categoryRoute)
app.use("/v1/keywords", keywordsRoute)
app.use("/v1/excludes", excludesRoute)
app.use("/v1/reviews", reviewsRoute)
app.use("/v1/products", productsRoute)
app.use("/v1/sliders", slidersRoute)
app.use("/v1/keys-in-review", keysInReview)
app.use("/v1/scrapper-logs", scrprLog)
app.use("/v1/scrapper-configs", scrprConfig)

/** exporting app */
module.exports = app