const express = require('express')
const Recipe = require('./model')

const router = express.Router()



router.get('/:id', async (req, res) => {
	const id = req.params.id
	const recipeInfo = await Recipe.getById(id)
	res.status(200).json(recipeInfo)
})

router.use( (err, req, res, next) => {
	res.status( err.status || 500).json({
		customMessage: 'something terrible inside the recipe router',
		message: err.message,
		stack: err.stack
	})
})

module.exports = router