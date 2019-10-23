const app = require('./src/app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const { categories } = require("./src/models/categories")
const fs = require('fs')

dotenv.config({ path: '.env' })

function sleep() {
   return new Promise((resolve, reject) => {
      try { setTimeout(() => { resolve() }, 1000) }
      catch (error) { reject({ error: true, message: error.message }) }
   })
}

mongoose.connect(process.env.DATABASE, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true
}).then(async () => {

   console.log("Database connected")

   /*
   let jsonObject = fs.readFileSync("./data/json/categories.json", 'utf-8')
   let cats = [...JSON.parse(jsonObject)]
   cats = cats.filter(c => c.cat !== "")

   for (let cat of cats) {
      try {
         await categories.init()
         let res = await categories.create(cat)
         console.log(res);
      } catch (error) { console.log("Error : " + error.message); }
      await sleep()
   }
   */

}).catch((err) => {
   console.log('Datebase connection error');
   console.log(`Message : ${err.message}`);
})

/** starting server */
const PORT = process.env.PORT || 3100
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))