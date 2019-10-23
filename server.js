const app = require('./src/app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

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
}).catch((err) => {
   console.log('Datebase connection error');
   console.log(`Message : ${err.message}`);
})

/** starting server */
const PORT = process.env.PORT || 3100
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))