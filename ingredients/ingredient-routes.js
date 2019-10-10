const express = require("express");

const db = require("./ingredient-model")

const router = express.Router();

router.get("/", (req,res) => {
  db.getIngredients()
    .then(ingredients => res.status(200).json(ingredients));
})
router.get("/:id/recipes", (req,res) => {
  db.getRecipesByIngredient(req.params.id)
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err));
});

module.exports = router;