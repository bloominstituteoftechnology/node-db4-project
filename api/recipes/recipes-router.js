const router = require('express').Router();


router.use('*', (req, res, next) => {
    res.json({ api: 'up' });
    next();
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        debugMessage: 'something went wrong in recipes-router.js',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;