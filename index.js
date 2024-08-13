require('dotenv').config() // bring in environment variables

const server = require('./api/server.js') // bring in server

const port = process.env.PORT 

server.listen(port, () => console.log(`\nAPI running on port ${port}\n`))