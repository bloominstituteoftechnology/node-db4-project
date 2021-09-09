const express = require("express");
const recipesRouter = require("./recipes/recipes-router");
const server = express();

server.use(express.json());
server.use("/api/recipes", recipesRouter);
server.use("*", (req, res) => {
    res.json({api: "up"})
})

// server.use((err, req, res,next) => {
//     res.status(err.status || 500).json({
//         message: err.message,
//     })
// })

module.exports = server;
