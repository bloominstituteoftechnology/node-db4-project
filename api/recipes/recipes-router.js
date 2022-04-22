const router = require('express').Router();

// eslint-disable-next-line no-unused-vars
router.use('*', (req, res, next) => {
    res.json({ api: 'up' })
})

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack })
})

module.exports = router;