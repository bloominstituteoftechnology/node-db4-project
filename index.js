const server = require('./api/server.js')
const port = 3333

server.listen(3333, ()=>{
    console.log(`listening on ${port}`)
})