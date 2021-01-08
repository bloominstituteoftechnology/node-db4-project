const express = require("express");
const db = require("../data/config");
const recipe = require("../models/recipesModel");
const router = express.Router();

router.get("/recipes", async (req, res, next) => {
	try {
		const recipes = await recipe.getRecipes()
		res.json(recipes)
	} catch (err) {
		next(err);
	}
});
router.get("/recipes/:id/ingredients", async (req, res, next) => {
	try {
		const shoppingList = await recipe.getShoppingList(req.params.id);
		res.json(shoppingList);
	} catch (err) {
		next(err);
	}
});
router.get("/recipes/:id/instructions", async (req, res, next) => {
	try {
		const instructions = await recipe.getInstructions(req.params.id);
		res.json(instructions);
	} catch (err) {
		next(err);
	}
});

module.exports = router