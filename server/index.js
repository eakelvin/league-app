const express = require('express')
const server = express()
const PORT = 5000

server.listen(PORT, () => console.log(`Server live on Port ${PORT}`))