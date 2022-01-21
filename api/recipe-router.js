const express = require('express');
//import model here
const router = express.Router();

// [GET] all recipes
router.get('/', (req, res, next) => {
    res.json({
        message: 'we getting GET /'
    })
    console.log(`we're at the GET / endpoint`)
})

module.exports = router;