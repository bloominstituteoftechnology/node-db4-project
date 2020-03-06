const express = require("express")

const db = require("../data/db-config")
const Ingredients = require("../helper")

const router = express.Router()

// return a list of all ingredients and quantities in the database
router.get("/", async (req, res, next) => {
  try {
    res.json(await db("ingredients"))
  } catch (err) {
    next(err)
  }
})

// return a given ingredient and quantity by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Ingredients.getIngredientById(id)
    .then(ingredient => {
      if (ingredient) {
        res.json(ingredient);
      } else {
        res.status(404).json({ message: 'Could not find ingredient with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get ingredient' });
    });
});

module.exports = router


// or
// router.get('/', (req, res) => {
//     Ingredients.getIngredients()
//         .then(ingredients => {
//             res.json(ingredients);
//         }).catch(err => {
//             res.status(500).json({ message: 'Failed to get ingredients' });
//         });
// });