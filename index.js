const server = require('./server.js')

const PORT = process.env.PORT || 4040

server.listen(PORT,() => {
    console.log(`\n+++++++You can find the Server on port ${PORT}++++++\n`)
})