require('dotenv').config({path: 'path-to-.env'})
const server = require("./api/server")

const port = process.env.PORT || 5000

server.listen(port, ()=> 
    console.log(`\nAPI is running on port ${port}\n`)
)
