const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const prodRouter = require('./routes/prodRoutes')

dotenv.config()
app.use(cors())
app.use(express.json())

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT

app.use("/products",prodRouter)



mongoose.connect(DB_URL).then(()=>{app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT} | connected!`);
})})