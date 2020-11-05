require("colors");
const express = require("express");
const helmet = require("helmet");

const server = express();
// const db = require("./data/db-config.js");

server.use(helmet());
server.use(express.json());

module.exports = server;
