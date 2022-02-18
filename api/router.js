const express = require("express");
const model = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  model
    .get()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:recipe_id", (req, res) => {
  model
    .getById(req.params.recipe_id)
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
