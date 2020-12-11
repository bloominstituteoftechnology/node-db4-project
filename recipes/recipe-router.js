const express = require('express');
const db = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.get(req.query)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "The recipe information could not be retrieved."
        })
      })
  });

  router.get('/list/:id', (req, res) => {
    const { id } = req.params
    db.getShoppingList(id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "The list information could not be retrieved."
        })
      })
  });

  router.get('/steps/:id', (req, res) => {
    const { id } = req.params
    db.getInstructions(id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "The list information could not be retrieved."
        })
      })
  });

module.exports = router;