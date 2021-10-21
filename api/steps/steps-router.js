const express = require('express');
const Steps = require('./steps-model');

const router = express.Router();

//[GET] /api/:recipe_id/steps
router.get('/steps', (req, res, next) => {
    Steps.getSteps()
})

module.exports = router;