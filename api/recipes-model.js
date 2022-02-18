const db = require("../data/db-config");

const getById = async (recipe_id) => {
  const recipe = await db("ingredient_quantity").where("recipe_id", recipe_id);
  return recipe;
};

module.exports = {
  getById,
};
