const express = require("express");

const Recipes = require("./recipes_models");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.find()
    .then(recipes => {
      // console.log(recipes);

      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Recipes.findById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipe with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

module.exports = router;
