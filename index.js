const express = require("express")
const welcomeRouter = require("./welcome/welcomeRouter");
const recipesRouter = require("./routers/recipesRouter")
const server = express()
const port = 9000


server.use(express.json())
server.use(welcomeRouter);
server.use(recipesRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})