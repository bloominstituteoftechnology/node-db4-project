const express = require("express");

const Foods = require("./foods-model");

const router = express.Router();

router.get("/", (req, res) => {
  Foods.getRecipes()
    .then((foods) => {
      res.json(foods);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Foods" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;

  Foods.getShoppingList(id)
    .then((food) => {
      if (food) {
        res.json(food);
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Foods" });
    });
});

router.get("/:id/instruction", (req, res) => {
  const { id } = req.params;

  Foods.getInstructions(id)
    .then((steps) => {
      if (steps.length) {
        res.json(steps);
      } else {
        res
          .status(404)
          .json({ message: "Could not find steps for given scheme" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get steps" });
    });
});

router.get("/:id/recipes", (req, res) => {
  const { id } = req.params;

  Foods.getRecipesByIngredients(id)
    .then((steps) => {
      if (steps.length) {
        res.json(steps);
      } else {
        res
          .status(404)
          .json({ message: "Could not find steps for given scheme" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get steps" });
    });
});

router.post("/", (req, res) => {
  const foodData = req.body;

  Foods.add(foodData)
    .then((food) => {
      res.status(201).json(food);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new scheme" });
    });
});

router.post("/:id/steps", (req, res) => {
  const stepData = req.body;
  const { id } = req.params;

  Foods.findById(id)
    .then((food) => {
      if (food) {
        Foods.addStep(stepData, id).then((step) => {
          res.status(201).json(step);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new step" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Foods.findById(id)
    .then((food) => {
      if (food) {
        Foods.update(changes, id).then((updatedFood) => {
          res.json(updatedFood);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update scheme" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Foods.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete scheme" });
    });
});

module.exports = router;
