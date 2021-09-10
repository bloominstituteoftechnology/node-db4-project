const express = require("express");
const Recipes = require("./recipes-model");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "router works" });
});

router.get("/:id", async (req, res, next) => {
  const recipe_id = Number(req.params.id);
  try {
    const response = await Recipes.getById(recipe_id);
    res.status(200).json(response);
  } catch {
    next();
  }
});

module.exports = router;
