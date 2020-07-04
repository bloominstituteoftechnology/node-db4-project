const express = require("express");
const server = express();
const Recipe = require("./appModel")

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//GET🏄🏽‍♂️ Test your Route
server.get("/api/test", async (req, res, next) => {
    try {
      res.json({message:"working"})
    } catch (error) {
      next(error);
    }
  });

//GET ALL RECIPES  ✅
server.get("/recipes", async (req, res, next) => {
 try {
     const data = await Recipe.getAllRecipes()
     res.json(data)
 } catch (error) {
     next(error)
 }
})

//GET All Ingredients
server.get("/ingredients", async (req, res, next) => {
    try {
        const data = await Recipe.getAllIngredients()
        res.json(data)
    } catch (error) {
        next(error)
    }
   })

//export your router
module.exports = server