require('dotenv').config()

const server = require('./api/server.js')

const port = process.env.PORT

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))
