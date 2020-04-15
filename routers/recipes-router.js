const express = require("express");
const Recipes = require("../models/recipes-model.js");
const Instructions = require("../models/instructions-model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Recipes.getAll()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      next({ message: "Failed to retrieve recipes" });
    });
});

router.post("/", validateRecipeBody, async (req, res, next) => {
  try {
    const [newRecipeId] = await Recipes.add(req.body);
    const addedRecipe = await Recipes.getById(newRecipeId);
    res.status(200).json(addedRecipe);
  } catch (err) {
    next({ message: "Failed to add recipe" });
  }
});

router.get("/:id", validateRecipeId, async (req, res, next) => {
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
  validateRecipeId,
  validateRecipeBody,
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

router.delete("/:id", validateRecipeId, async (req, res, next) => {
  try {
    const result = await Recipes.remove(req.params.id);
    if (+result === 1) {
      res.status(204);
    } else {
      next({ message: "Failed to delete recipe" });
    }
  } catch (error) {
    next({ message: "Failed to delete recipe" });
  }
});

router.get("/:id/shoppinglist", validateRecipeId, (req, res, next) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next({ message: "Failed to retrieve shopping list" });
    });
});

router.get("/:id/instructions", validateRecipeId, (req, res, next) => {
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
  validateRecipeId,
  validateInstruction,
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
  validateRecipeId,
  validateInstructionId,
  async (req, res, next) => {
    try {
      const result = await Instructions.remove(req.params.instructionId);

      if (+result === 1) {
        res.status(204);
      } else {
        next({ message: "Failed to delete recipe step from database " });
      }
    } catch (error) {
      next({ message: "Failed to delete recipe step" });
    }
  }
);

function validateRecipeBody(req, res, next) {
  const recipe = req.body;
  !recipe.name
    ? next({
        status: 400,
        message: "Please provide a recipe name",
      })
    : next();
}

async function validateRecipeId(req, res, next) {
  try {
    const recipe = await Recipes.getById(req.params.id);
    !recipe
      ? next({
          status: 404,
          message: "Recipe does not exist",
        })
      : next();
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
}

function validateInstruction(req, res, next) {
  const instruction = req.body;
  if (!instruction.step || !instruction.step_number) {
    next({ status: 400, message: "Please provide a step number and step" });
  } else {
    next();
  }
}

async function validateInstructionId(req, res, next) {
  const { instructionId } = req.params;
  try {
    const instruction = await Instructions.getById(instructionId);

    !instruction.length
      ? next({
          status: 404,
          message: `Instruction with id of ${instructionId} does not exist`,
        })
      : next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = router;
