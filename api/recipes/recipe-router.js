const express = require("express");
const recipies = require("./recipe-model");

const router = express.Router();
const { validateId } = require("./recipe-middleware");

router.get("/:id", validateId, async (req, res) => {
  const recipe = await recipies.getById(req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(500).json({ message: "Error finding recipe" });
  }
});

module.exports = router;
