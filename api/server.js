const express = require('express');

const server = express();

server.use(express.json());

server.use('/', (req, res)=>{
    res.send('Unit 4 Week 2 Module 4')
})

server.use((err, req, res, next) => { // eslint-disable-line
    console.log('disaster!')
    res.status(err.status || 500).json({
      message: `The Horror: ${err.message}`,
    })
  })

module.exports = server;