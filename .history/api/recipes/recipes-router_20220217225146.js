const express = require('express');
const Recipe = require('../recipes/recipes-model');

const router = express.Router();

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(resource => {
            res.status(200).json(resource)
        })
})
router.use('*', (req, res) => {
	res.json({ API: 'online' });
});

// router.use((err, req, res, next) => { //eslint-disable-line
// 	res.status(500).json({
// 		customMessage: 'Something broke in the recipes router',
// 		message: err.message,
// 		stack: err.stack,
// 	});
// });

module.exports = router;
