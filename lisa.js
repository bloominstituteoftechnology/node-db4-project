const { getRecipes, getShoppingList, getInstructions } = require('./router/recipe_model');

getInstructions(1).then((out) => {
  console.log(out);
  process.exit(0);
}).catch(console.error);
