const router = require('express').Router()

router.use('*', (req, res, next) => {
    res.json({ api: 'up '})
})

router.use((err, req, res) => {
    res.status(500).json({
        custom: 'something bad happened in router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;