exports.seed = function (knex) {
	return knex('ingredients').insert([
		{ ingredient_name: 'water' },
		{ ingredient_name: 'hotdogs' },
		{ ingredient_name: 'mustard' },
		{ ingredient_name: 'relish' },
		{ ingredient_name: 'ketchup' },
		{ ingredient_name: 'hotdog buns' },
		{ ingredient_name: 'sugar' },
		{ ingredient_name: 'cinnamon' },
		{ ingredient_name: 'bread' },
		{ ingredient_name: 'butter' },
	]);
};
