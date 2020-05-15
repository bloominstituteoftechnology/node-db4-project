const express = require("express")

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.get("/api/recipes", async (req, res, next ) => {
  try {
    res.json(await db("recipes"))
      } catch(err) {
        next(err)
      }})

server.listen(port, () => {
  console.log (`Listening on http://localhost:${port}`)}
  )
