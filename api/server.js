const server = require("express")();
server.use(express.json());

const recipiesRouter = require("./recipies/recipies-router");

server.use("/api/recipies", recipiesRouter);

module.exports = server;
