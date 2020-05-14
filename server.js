const express = require("express");

const FoodsRouter = require("./foods/foods-router.js");

const server = express();

server.use(express.json());
server.use("/api/foods", FoodsRouter);

module.exports = server;
