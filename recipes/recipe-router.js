const express = require('express');

const Schemes = require('./recipe-model.js');

const router = express.Router();


router.use((req, res, next) => {
    console.log("recipe-router");
    next();
  })

  module.exports = router;