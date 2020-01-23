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





module.exports = router;
