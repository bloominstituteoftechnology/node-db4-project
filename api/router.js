const express = require('express');

const router = express.Router();

router.get('/recipes', (req, res, next) => {
    res.send('endpoint is working')
});

module.exports = router;