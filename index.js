const express=require ("express")

const server=express()
const port= process.env.PORT || 5555

server.use(express.json())

server.listen(port,()=>{
    console.log("Srver Started @ http://localhost:"+port)
})
