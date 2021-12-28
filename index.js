const server = require('./api/server')
require('dotenv').config()

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})