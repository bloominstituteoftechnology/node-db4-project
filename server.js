const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const RecipesRouter = require('./recipes/recipes-router.js');
const IngredientsRouter = require('./ingredients/ingredients-router.js');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'));
server.use(cors());

server.use('/api/recipes', RecipesRouter);
server.use('/api/ingredients', IngredientsRouter);

const port =  process.env.PORT || 9000;

server.get('/', (req, res) => res.send(`API up and running on port ${port}`))

module.exports = server;