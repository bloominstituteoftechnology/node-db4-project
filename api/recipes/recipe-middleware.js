const recipies = require("./recipe-model");

async function validateId(req, res, next) {
  const id = req.params.id;
  const recipe = await recipies.getById(id);
  if (recipe) {
    next();
  } else {
    res.status(404).json({ message: "Recipe not found" });
  }
}

module.exports = validateId;
