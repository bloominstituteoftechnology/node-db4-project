const server = require("./server");
const recipesRouter = require('./routes/recipe-routes')

server.use("/recipes",recipesRouter)

server.get("/", (req, res) => {
  res.status(200).json({ Data: "WORKING" });
});
