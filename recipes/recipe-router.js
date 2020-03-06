const express = require("express")

const db = require("../data/db-config")
const Recipes = require("../helper")

const router = express.Router()

// return a list of all recipes in the database
router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
});

// return a list of all ingredients and quantities for a given recipe
router.get('/:id/ShoppingList', (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then(ingredients => {
      res.json(ingredients);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get ingredients' });
    });
});

// return a list of step by step instructions for preparing a recipe 
router.get('/:id/getInstructions', (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then(steps => {
      res.json(steps);
    })
    .catch(err => {
      console.log("error:", error)
      res.status(500).json({ message: 'Failed to get steps' });
    });
});

//----------------------------------------------------------------//
// Additional Endpoints

// return a given recipe by id
router.get("/:id", async (req, res, next) => {
  try {
    const recipes = await db("recipes")
      .where("id", req.params.id)
      .first()

    if (!recipes) {
      return res.status(404).json({
        message: "Recipes not found",
      })
    }
    res.json(recipes)
  } catch (err) {
    next(err)
  }
})


// or
// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   Recipes.getById(id)
//   .then(recipe => {
//     if (recipe) {
//       res.json(recipe);
//     } else {
//       res.status(404).json({ message: 'Could not find recipe with given id.' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get recipe' });
//   });
// });


// add/create a new recipe
router.post('/', (req, res) => {
  const recipeData = req.body;

  Recipes.add(recipeData)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new recipe' });
    });
});


// add/create a step for a recipe
router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params;

  Recipes.getById(id)
    .then(recipe => {
      if (recipe) {
        Recipes.addSteps(stepData, id)
          .then(step => {
            res.status(201).json(step);
          })
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new step' });
    });
});

module.exports = router