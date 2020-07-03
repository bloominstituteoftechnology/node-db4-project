const express = require("express");
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//GET🏄🏽‍♂️ Test your Route
server.get("/api", async (req, res, next) => {
    try {
      res.json({message:"working"})
    } catch (error) {
      next(error);
    }
  });

//export your router
module.exports = server