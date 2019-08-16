const express = require('express');

const RecipeDb = require('./recipe-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
 try {
  const recipe = await RecipeDb.find();
  res.json(recipe);
 } catch (err) {
  res.status(500).json({ message: 'Failed to get recipes' });
 }
});

router.post('/', async(req, res)=>{
    try{
        const recipe = await RecipeDb.add(req.body)

    }catch(err){
        res.status(500).json({message: 'Failed to add recipe'})
    }
})

module.exports = router;
