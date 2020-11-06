exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("recipes")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("recipes").insert([
				{ id: 1, colName: "id" },
				{ id: 2, colName: "recipe_name" },
			]);
		});
};
