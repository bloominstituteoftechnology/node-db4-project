const express = require('express')
const recipe = require('./recipes-model')
const mw = require('./recipes-middleware')

const router = express.Router()

router.get('/:id', (req, res) => {

})

module.exports = router