const router = require('express').Router()

// Global endpoint for testing
router.use('*', (req, res) => {
    res.json({api: 'up'})
})

// Error handling
router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went terribly wrong inside the recipes router',
        message: err.stack,
    })
})

module.exports = router