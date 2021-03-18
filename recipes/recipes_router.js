const express = require("express")
const {getRecipes, getShoppingList, getInstructions} = require("./recipes_model")

const router = express.Router()

router.get("/", (req, res, next) => {
    getRecipes()
    .then(recipes => res.json(recipes))
    .catch(next)
})

router.get("/:id/shoppingList", (req, res, next) => {
    getShoppingList(req.params.id)
    .then(list => res.json(list))
    .catch(next)
})

router.get("/:id/instructions", (req, res, next) => {
    getInstructions(req.params.id)
    .then(instructions => res.json(instructions))
    .catch(next)
})

module.exports = router