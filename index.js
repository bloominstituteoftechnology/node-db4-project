const express = require("express");
const { getRecipes, getShoppingList, getInstructions } = require('./router/recipe_model');

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.get("/api/recipes", async (req, res, next) => {
  try {
    res.json(await getRecipes()).end();
  } catch (err) {
    next(err)
  }
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
