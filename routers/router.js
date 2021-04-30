const express = require("express")
const { getRecipeById } = require("../model/model")
const { checkRecipeId } = require("../middleware/middleware")

const router = express.Router()

router.get("/recipes/:id", checkRecipeId(), async (req, res, next) => {
    try {
        const recipe = await getRecipeById(req.recipe.id)
        res.json(recipe)
    } catch(err) {
        next(err)
    }
})

module.exports = router