const express = require('express');
const Recipes = require('../recipes/recipes-model');

const router = express.Router();

router.use('*', (req, res, next) => {
	res.json({ API: 'online' });
});

// router.use((err, req, res, next) => { //eslint-disable-line
// 	res.status(500).json({
// 		customMessage: 'Something broke in the recipes router',
// 		message: err.message,
// 		stack: err.stack,
// 	});
// });

module.exports = router;
