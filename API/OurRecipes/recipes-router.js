const router = require('express').Router()

router.use('*', (req, res, next) => {
    res.json({ api: 'Api Is Running'})
})

router.use((err, req, res, next) => {
    res.status(500).json({
        failMessage: 'Failure In Router',
        message: err.message,
        stack: err.stack
    })
})
module.exports = router