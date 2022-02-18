exports.seed = function (knex, promise) {
	return knex('ingredients').insert([
		{
			ingredient_name: 'Mezze Maniche Pasta',
			ingredient_unit: 'grams',
		},
		{
			ingredient_name: 'Egg Yolks',
			ingredient_unit: 'yolk(s)',
		},
		{
			ingredient_name: 'Guanciale',
			ingredient_unit: 'grams',
		},
		{
			ingredient_name: 'Pecorino Romano Cheese',
			ingredient_unit: 'grams',
		},
		{ 
			ingredient_name: 'Course Black Pepper', ingredient_unit: 'to taste' },
		{ 
			ingredient_name: 'Spaghetti', ingredient_unit: 'grams' },
		{ 
			ingredient_name: 'Salt', ingredient_unit: 'to taste' },
		{ 
			ingredient_name: 'Salted Capers', ingredient_unit: 'grams' },
		{ 
			ingredient_name: 'Anchovies in Oil', ingredient_unit: 'grams' },
		{ 
			ingredient_name: 'Garlic', ingredient_unit: 'clove(s)' },
		{ 
			ingredient_name: 'Extra Virgin Olive Oil', ingredient_unit: 'grams' },
		{ ingredient_name: 'Peeled tomatoes', ingredient_unit: 'grams' },
		{ ingredient_name: 'Parsley', ingredient_unit: 'Bunch(s)' },
		{ ingredient_name: 'Gaeta Olives', ingredient_unit: 'grams' },
		{ ingredient_name: 'Dried Chili Peppers', ingredient_unit: 'pepper(s)' },
	]);
};
