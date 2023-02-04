import { app } from './app.js'
import { config } from 'dotenv'
import mongoose from 'mongoose'

config()

const port = process.env.PORT || 3002
const mongo_url = process.env.MONGO_URI

mongoose.connect(mongo_url).then(() => {
  console.log('Database connection secured.')
})
app.listen(port, () => {
  console.log(`server is running on : http://localhost:${port}/`)
})
