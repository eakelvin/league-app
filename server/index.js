require('dotenv').config()
const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000

const connectDatabase = require('./src/config/database')
connectDatabase()


server.listen(PORT, () => console.log(`Server live on Port ${PORT}`))