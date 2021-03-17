exports.seed = async function(knex) {
  await knex("recipes").insert([   
		{ name: "Fried Rice"},
		{ name: "Chicken Lollypop"},
	])
};