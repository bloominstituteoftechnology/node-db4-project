const express = require('express');

const db = require('../data/db-config.js');

const server = express();

server.use(express.json());



module.exports = server;
