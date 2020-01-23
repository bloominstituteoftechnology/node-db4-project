const express = require('express');
const db = require('../db-config');

const router = express.Router();

router.get('/', (req, res) => {
  db('')
  .then(cars => {
    res.json(cars); 
  })
  .catch (err => {
    res.status(500).json({ message: '' });
  });
});
module.exports = router;