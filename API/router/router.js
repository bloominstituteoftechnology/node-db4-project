const express = require("express");
const Model = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await Model.getRecipes();
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Model.getShoppingList(id);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
});
router.get("/:id/steps", async (req, res, next) => {
  try {
    const data = await Model.getInstructions(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;