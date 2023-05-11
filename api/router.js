const express = require("express");
const Helpers = require("./model");

const router = express.Router();

//eslint-disable-next-line
router.get("/:id", async (req, res, next) => {
  const { id } = req.params
  const response = await Helpers.getRecipes(id)
  res.status(200).json(response)

});

module.exports = router;
