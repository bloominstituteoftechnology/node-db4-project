const express = require('express');

const Steps = require('./step-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Steps.find()
    .then(steps => {
      res.status(200).json(steps);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get steps ' + err });
    });
});

module.exports = router;
