exports.seed = function (knex) {
	return knex('recipes').insert([
		{ recipe_name: 'boiled water' },
		{ recipe_name: 'hotdogs' },
		{ recipe_name: 'cinnamon toast' },
	]);
};
