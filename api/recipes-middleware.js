const db = require('../data/db-config');

const validateRecipeId = async (req, res, next) => {
  try {
    const result = await db('recipes').where('id', req.params.id).first();

    if (!result) {
      res.status(404).json({
        message: `recipe with id ${req.params.id} not found`,
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateRecipeId,
};
