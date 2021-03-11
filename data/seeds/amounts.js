exports.seed = async function(knex) {
  await knex("amounts").insert([   
		{ amount: "2 cups", recipe_id: 1, ingredient_id: 1 },
		{ amount: "1 cup", recipe_id: 2, ingredient_id: 2 },
    { amount: "3 cups", recipe_id: 1, ingredient_id: 3 },
    { amount: "2 cups", recipe_id: 2, ingredient_id: 4 },
	])
};