const router = require('express').Router();

router.use('*', (req, res) => {
    res.json({ api: 'up'})
});

router.use((error, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong',
        message: error.message,
        stack: error.stack
    })
})

module.exports = router;