const express = require('express');
const Data = require("./data-access");
const server = express();

server.use(express.json());

server.get("/api/recipes", (req, res) => {
    Data.getRecipes()
        .then((recipes) => {
            res.status(200).json(recipes)
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        })
})

module.exports = server;
