const express = require("express");

const Ingredients = require("./ingredients-model.js");

const router = express.Router();

router.get("/", (req, res) => {});

router.get("/:id"), (req, res) => {};

router.get("/:id/recipes", (req, res) => {});

module.exports = router;
