const express = require("express");

const Recipes = require("./recipes-model.js");

const router = express.Router();

router.get("/", (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        });
});

router.get("/:id/shopping", (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(list => {
            if (list.length > 0) {
                res.status(200).json(list);
            } else {
                res.status(404)
                    .json({ errorMessage: "The recipe specified does not exist." })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: "Could not retrieve shopping list." })
        });
});

router.get("/:id/instructions", (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(instructions => {
            if (instructions.length <= 0) {
                res.status(404).json({
                    errorMessage: "The recipe with the specified ID does not exist."
                });
            } else {
                res.status(200).json(instructions);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: "The instructions could not be returned." });
        });
});

module.exports = router;