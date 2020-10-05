const express = require('express'); 
const cors = require('cors'); 
const helmet = require('helmet'); 

const server = express(); 
const recipesRouter = require('../recipes/recipes-router'); 

//! server.use statements REMEMBER ORDER MATTERS !// 
server.use(express.json()); 
server.use(cors()); 
server.use(helmet()); 
//! routers go here !//
server.use('/api/recipes', recipesRouter); 

server.get('/', (req, res) => {
    res.send({ message: "This server is bumping yo!" }); 
}); 

module.exports = server; 