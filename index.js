require('dotenv').config()

const server = require('./api/server')

const PORT = process.env.PORT

server.listen(PORT, () => console.log(`\nAPI is running on port ${PORT}\n`))