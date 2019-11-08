const server = require('./server.js')
const port = 4000

server.listen(4000, ()=>{
    console.log(`listening on ${port}`)
})