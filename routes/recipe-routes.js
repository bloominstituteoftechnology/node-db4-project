const express = require("express");
const router = express.Router();
const Recipes = require("./recipe-model");

function idCheck(req, res, next) {
  if (req.params.id) {
    next();
  } else {
    res.status(400).json({ Message: "No such ID exists" });
  }
}
function bodyCheck(req, res, next) {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ Message: "Please include a name" });
  }
}

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((resp) => {
      res.status(200).json({ Data: resp });
    })
    .catch((err) => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.get("/:id/ingredients", (req, res) => {
  const id = req.params.id;
  Recipes.getShoppingList(id)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.get("/:id", idCheck, (req, res) => {
  Recipes.findById(req.params.id)
    .then((resp) => {
      res.status(200).json({ Data: resp });
    })
    .catch((err) => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.put("/:id", idCheck, bodyCheck, (req, res) => {
  const changes = req.body;
  const id = req.params.id;
  Recipes.update(id, changes)
    .then((resp) => {
      res.status(201).json(resp);
    })
    .catch((err) => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.post("/", bodyCheck, (req, res) => {
  Recipes.addRecipe(req.body)
    .then((resp) => {
      res.status(201).json({ Data: resp });
    })
    .catch((err) => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

router.delete("/:id", idCheck, (req, res) => {
  Recipes.remove(req.params.id)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      res.status(500).json({ ErrorMessage: err.message });
    });
});

module.exports = router;
