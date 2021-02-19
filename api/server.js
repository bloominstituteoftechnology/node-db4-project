const express = require('express');
const helmet = require('helmet');
const db = require('../data/db-config');
const RecipieRouter = require('./recipies/recipie-router');

const server = express();

server.use(helmet())
server.use(express.json());
server.use('/api/recipies', RecipieRouter);

module.exports = server;
