const express = require('express')
const { checkRecipeId } = require('./middleware')

const router = express.Router()

router.get('/:id', checkRecipeId, (req, res) => {
    res.status(200).json(req.recipe)
})

router.use((err, req, res, next) => {
    res.status(err.message || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router