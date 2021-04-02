const router = require("express").Router();
const helpers = require("./model");

router.get("/:id", async (req, res) => {
  console.log("inside router");
  console.log(req.params.id);

  try {
    const recipes = await helpers.getRecipeById(req.params.id);
    if (recipes) {
      res.status(200).json(recipes);
    } else {
      res.status(400).json({ message: "unable to fetch recipes" });
    }
  } catch (err) {
    res.status(500).json({ message: "server side issue" });
  }
});

module.exports = router;
