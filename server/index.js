require('dotenv').config()
const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')

const statsRoute = require('./src/routes/statsRoute')
const connectDatabase = require('./src/config/database')
connectDatabase()

server.use(cors({
    origin: [
        'http://localhost:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
server.use(express.json())
server.use('/stats', statsRoute)

server.listen(PORT, () => console.log(`Server live on Port ${PORT}`))