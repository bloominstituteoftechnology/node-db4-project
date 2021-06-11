require('dotenv').config()

const server = require('./API/server')

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`\nAPI running on ${port}\n`))