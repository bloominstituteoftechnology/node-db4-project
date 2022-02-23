const router = require('express').Router();
const Recipe = require('./recipes-model');

router.get('/:recipe_id', (req, res, next) =>
{
    Recipe.getRecipeById(req.params.recipe_id)
        .then(recipe =>
        {
            res.status(200).json(recipe);
        })
        .catch(next);
});

// router.get('/animals', (req, res, next) => {
//   helpers.getAnimals() //INCLUDING SPECIES NAME
//     .then(animals => {
//       res.status(200).json(animals);
//     })
//     .catch(next);
// });

// router.post('/animals', (req, res, next) => { // it would be nice to have animal validation midd
//   helpers.createAnimal(req.body)
//     .then(animal => {
//       res.status(201).json(animal);
//     })
//     .catch(next);
// });

// router.delete('/species/:species_id', (req, res, next) => { // it would be nice to have species_id validation midd
//   helpers.deleteSpecies(req.params.species_id)
//     .then(count => {
//       if (count > 0) {
//         res.status(204).end();
//       } else {
//         res.status(404).json({ message: 'Record not found' });
//       }
//     })
//     .catch(next);
// });

router.use((err, req, res, next) =>
{
    res.status(500).json({
        customMessage: 'error in recipes router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;
