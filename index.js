const express = require('express')
const server = express()
const recipe = require('./models/recipes')
const ingredient = require('./models/ingredients')

const PORT = process.env.PORT || 5000
server.use(express.json())


server.get("/recipes", async (req, res, next) => {
	try {
		const recipes = await recipe.find()
		res.json(recipes)
	} catch(err) {
		next(err)
	}
})


server.get("/ingredients", async (req, res, next) => {
	try {
		const ingredients = await ingredient.find()
		res.json(ingredients)
	} catch(err) {
		next(err)
	}
})


server.listen(PORT, () => {
	console.log(`Running at on ${PORT}`)
})