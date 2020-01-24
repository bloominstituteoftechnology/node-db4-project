const route = require('express').Router()

route.get('/',(req,res)=> res.send('We Are in'))

module.exports = route