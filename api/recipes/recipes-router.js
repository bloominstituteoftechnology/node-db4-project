const router = require("express").Router()
const recipes = require("./recipes-model.js")

router.get("/:id", (req,res)=>{
    recipes.findById(req.params.id)
    .then(recipe=>{
        res.status(200).json(recipe)
    })
    .catch(err=>{
        res.status(500).json(err.message)
    })
})

module.exports = router