const router = require('express').Router()
const cookbook = require('./recipes-model') 

router.get('/:id', (req, res, next) => {
    cookbook.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      custom: "Something is wrong in the router",
      message: err.message,
      stack: err.stack,
    });
    next()
});

module.exports = router