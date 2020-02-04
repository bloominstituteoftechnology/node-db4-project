const express = require('express')
const app = express()

const {router: recipesRouter} = require('./router/recipeRouter');
const {router: ingredientsRouter} = require('./router/ingredientsRouter')

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/api/recipes', recipesRouter)
app.use('/api/ingredients', ingredientsRouter)

module.exports = app;