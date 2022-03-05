require('dotenv').config()

const server = require('./api/server')

const port = process.env.PORT

// server.listen(5000, () => {
//     console.log('server running')
// })

server.listen(port, () => {
    console.log(`\n API running on port ${port} YAAAY!!\n`)
})