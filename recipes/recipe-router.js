const express = require('express');

const Recipes = require('../recipes/recipe-model')

const router = express.Router();
const validate = require('../utils/validate');


router.get("/", (req, res, next) => {
  Recipes.getAll()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      next({ message: "Failed to retrieve recipes" });
    });
});

router.post("/", validate.recipeBody, async (req, res, next) => {
  try {
    const [newRecipeId] = await Recipes.add(req.body);
    const addedRecipe = await Recipes.getById(newRecipeId);
    res.status(200).json(addedRecipe);
  } catch (err) {
    next({ message: "Failed to add recipe" });
  }
});

router.get("/:id", validate.recipeId, async (req, res, next) => {
  const { id } = req.params;
  try {
    const recipe = await Recipes.getById(id);
    res.json(recipe);
  } catch (error) {
    next({ message: "Failed to retrieve recipe" });
  }
});

router.put(
  "/:id",
  validate.recipeId,
  validate.recipeBody,
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await Recipes.update(id, req.body);
      if (+result === 1) {
        const updatedRecipe = await Recipes.getById(id);
        res.json(updatedRecipe);
      } else {
        next({ message: "Failed to update recipe in database" });
      }
    } catch (error) {
      next({ message: "Failed to update recipe" });
    }
  }
);

router.delete("/:id", validate.recipeId, async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Recipes.remove(id);

    !result
      ? next({ message: "Failed to delete recipe" })
      : res.status(200).json({
          message: `Recipe with id of ${id} successfully deleted!`,
        });
    //res.status(204);
  } catch (error) {
    next({ message: error });
  }
});

router.get("/:id/shoppinglist", validate.recipeId, (req, res, next) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next({ message: "Failed to retrieve shopping list" });
    });
});

router.post(
  "/:id/shoppingList",
  validate.recipeId,
  validate.shoppingListItem,
  async (req, res, next) => {
    const item = req.body;
    item.recipe_id = req.params.id;
    try {
      const result = await Recipes.addToShoppingList(item);
      res.json(result);
    } catch (error) {
      next({ message: error });
    }
  }
);

router.get("/:id/instructions", validate.recipeId, (req, res, next) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then((instructions) => {
      res.json(instructions);
    })
    .catch((err) => {
      next({ message: "Failed to retrieve instructions from database" });
    });
});

router.post(
  "/:id/instructions",
  validate.recipeId,
  validate.instructionBody,
  async (req, res, next) => {
    const { id } = req.params;
    const instruction = req.body;
    instruction.recipe_id = id;
    instruction.step_number = +instruction.step_number;
    try {
      const [instructionId] = await Instructions.add(instruction);
      const newInstruction = await Instructions.getById(instructionId);
      res.status(201).json(newInstruction);
    } catch (error) {
      next({ message: "Failed to add recipe step" });
    }
  }
);

router.delete(
  "/:id/instructions/:instructionId",
  validate.recipeId,
  validate.instructionId,
  async (req, res, next) => {
    try {
      const result = await Instructions.remove(req.params.instructionId);

      if (+result === 1) {
        res.status(200).json({
          message: `Instruction with id of ${instructionId} successfully deleted!`,
        });
      } else {
        next({ message: "Failed to delete recipe step from database " });
      }
    } catch (error) {
      next({ message: "Failed to delete recipe step" });
    }
  }
);

module.exports = router;