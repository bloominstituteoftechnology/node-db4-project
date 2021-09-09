const router = require("express").Router()
const verifyRecipeId = require("./middleware")

router.get("/:id", verifyRecipeId, (req, res) => {
    res.status(200).json(req.recipe)
})

module.exports = router