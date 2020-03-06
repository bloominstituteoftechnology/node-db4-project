const express = require("express")

const Steps = require("../helper")

const router = express.Router()

// return a list of all steps for preparing all recipes
router.get('/', (req, res) => {
  Steps.getSteps()
    .then(steps => {
      res.json(steps);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get steps' });
    });
});

// return a given step by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Steps.getStepById(id)
    .then(step => {
      if (step) {
        res.json(step);
      } else {
        res.status(404).json({ message: 'Could not find step with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get step' });
    });
});


module.exports = router