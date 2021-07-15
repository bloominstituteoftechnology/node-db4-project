const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET all endpoint connected')
})

module.exports = router;