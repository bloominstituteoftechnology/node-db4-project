const router = require('express').Router();
const Recipe = require('./recipes-model')

router.get('/recipes', (req, res, next) => {
    Recipe.getByRecipes()
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
});

router.get('/:recipes_id', (req, res) => {
    Recipe.getRecipesById(req.params.recipes_id)
        .then(recipe => {
            if(recipe){
                res.json(recipe)
            } else {
                res.status(404).json({message: 'Failed to retrieve recipe'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to find recipe'})
        })
})

module.exports = router;