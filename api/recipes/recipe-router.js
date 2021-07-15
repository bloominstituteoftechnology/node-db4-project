const express = require('express')
const {  } = require('./recipe-middleware')
const Schemes = require('./recipe-model.js')

const router = express.Router()

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Look at recipe router, error caught there',
      message: err.message,
      stack: err.stack,
    })
})
    
module.exports = router;