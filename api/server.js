const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors')

const router = require('./router') 

const server = express();
server.use(express.json());
server.use(logger('dev'));
server.use(helmet());
server.use(cors()) // cors() returns a (req, res, nex) => { // stuff and then next() }

server.use('/api', router)

server.use('/', (req, res)=>{
    res.send('hello!')
})

server.use((err, req, res, next) => { // eslint-disable-line   
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;