const express = require("express");
const server = express();
const recipesRouter = require("./recipes/recipes-router.js");
const port = process.env.PORT || 5000;

server.use(express.json());
server.use("/api/recipes", recipesRouter);

server.listen(port, () => console.log(`server listening on port ${port}`));
