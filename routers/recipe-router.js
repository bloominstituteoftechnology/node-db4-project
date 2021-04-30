const express = require("express")
const router = express.Router()

const db = require("../models/recipes")


router.get("/", async (req, res, next) => {
  try {
		const recipe = await db.getAll()
		res.json(recipe)
	} catch(err) {
		next(err)
	}
})




module.exports = router