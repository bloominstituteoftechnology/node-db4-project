const express = require('express');

const {
  getRecipes,
//   getShoppingList,
//   getInstructions,
} = require("./recipe-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
    // try {
        const recipeData = await getRecipes();
        res.status(200).json(recipeData)
    // } catch(err) {
    //     console.error(err);
    //     res.status(404).json(err, 'Could not find recipe')
    // };
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const userData = await findById(id);
    if (userData) {
        res.status(200).json(userData);
    } else {
        res.status(404).json("Could not find recipe with given id")
    }
});

module.exports = router;