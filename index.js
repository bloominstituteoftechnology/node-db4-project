require(`dotenv`).config()
const server = require("./api/server")

const poty = process.env.PORT

server.listen(port, () => {
    console.log(`\nAPI running on port ${port}\n`)
})