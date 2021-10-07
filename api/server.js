const express = require('express');

const RecipesRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);

server.get('/', (req, res) => {
    res.json({ message: 'Recipes Api is working add a route to see more' });
    console.log('api is working');
});

server.use('*', (req, res, next) => {
    next({status: 404, message: 'Bad Route try another'});
    // alternative
    // res.status(404).json({
    //     message: 'Bad route try another'
    // });
});

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;
