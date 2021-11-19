const express = require('express');
const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/', (req,res) => {
    res.json({ message: 'api success'})
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        checkpoint: 'You made it to the last middleware!',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;