const express = require('express');

const router = express.Router();

router.use('*', (req, res) => {
  res.json({ message: 'it seems to be workin'})
})

router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    customMessage: 'It aint working man',
    message: err.message,
    stack: err.stack
  })
})


module.exports = router;