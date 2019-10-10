const express = require("express");

const db = require("./recipe-model")

const router = express.Router();

router.get("/", (req,res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err));
});

router.get(":id/ingredients", (req,res) => {
  db.getShoppingList(req.params.id)
    .then(ingredients => res.status(200).json(ingredients))
    .catch(err => res.status(500).json(err));
});

router.get(":id/steps", (req,res) => {
  db.getInstructions(req.params.id)
    .then(steps => res.status(200).json(steps))
    .catch(err => res.status(500).json(err));
});

module.exports = router;