exports.seed = async function(knex) {
	await knex("recipes").insert([   
		{ name: "Homemade Fries"},
		{ name: "Fried Steak With Mushrooms"}
	])
}