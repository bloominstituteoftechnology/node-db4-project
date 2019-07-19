const express = require('express');

const Steps = require('./step-model.js');

const router = express.Router();

const middleware = require('../middleware/middleware.js');

router.get('/', async (req, res) => {
  try {
    const instructions = await Steps.find(req.query);
    res.status(200).json(instructions);
  } catch (error) {
    res.status(500).json({
      error: 'There was an error finding all steps. Sorry, that is on us!',
    });
  }
});

router.get('/:id', middleware.validateStepId, async (req, res) => {
  try {
    res.status(200).json(req.instruction);
  } catch (error) {
    const { id } = req.params;

    res.status(500).json({
      error: `There was an error getting the step with the id: ${id}.`,
    });
  }
});

router.put(
  '/:id',
  middleware.validateStepId,
  middleware.validateStep,
  async (req, res) => {
    try {
      const { id } = req.params;

      const updateStep = await Steps.update(id, req.body);
      res.status(200).json(updateStep);
    } catch (error) {
      res.status(500).json({
        error: `There was an error updating the step with the id: ${id}.`,
      });
    }
  },
);

router.delete('/:id', middleware.validateStepId, async (req, res) => {
  try {
    const { id } = req.params;

    const successFlag = await Steps.remove(id);
    if (successFlag > 0) {
      res.status(200).json(req.instruction);
    }
  } catch (error) {
    const { id } = req.params;
    res.status(500).json({
      error: `The step with the id: ${id} could not be removed from the database.`,
    });
  }
});

module.exports = router;
