exports.seed = async function(knex) {
  await knex("ingredients").insert([   
		{ name: "Rice", recipe_id: 1 },
		{ name: "Chicken", recipe_id: 2 },
    { name: "Mix Vegetable", recipe_id: 1 },
    { name: "flour", recipe_id: 2 },
	])
};