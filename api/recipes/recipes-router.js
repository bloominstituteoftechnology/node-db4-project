const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    try {
        res.json({
            message: 'getAll endpoint wired!'
        })
    } catch (err) {
        next(err)
    }
})

router.get('/:id', (req, res, next) => {
    try {
        res.json({
            message: 'getById endpoint wired!'
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router
