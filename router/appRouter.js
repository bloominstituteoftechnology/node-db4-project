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

//GET All Ingredients ✅
server.get("/ingredients", async (req, res, next) => {
    try {
        const data = await Recipe.getAllIngredients()
        res.json(data)
    } catch (error) {
        next(error)
    }
   })

//GET Ingredients for Recipie ID
server.get("/shoppinglist/:id", async (req, res, next) => {
    try {
        const list = await Recipe.getShoppingList(req.params.id)
        if(list.length === 0) {
            return res.status(404).json({
                message:"Recipe Does Not Exist"
            })
        } else {
            res.json(list)
        }
    } catch (error) {
        next(error)
    }
})

//export your router
module.exports = server