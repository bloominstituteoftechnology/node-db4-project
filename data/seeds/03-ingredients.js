exports.seed = function (knex, Promise) {
  return knex('ingredients').insert([
    {
      ingredient_name: 'Pita Bread',
    },
    {
      ingredient_name: 'Tomato Sauce',
    },
    {
      ingredient_name: 'Jamies Spices',
    },
    {
      ingredient_name: 'Mozzarella Cheese',
    },
    {
      ingredient_name: 'Pepperoni',
    },
    { ingredient_name: 'Frozen Diced Potatoes' },
    {
      ingredient_name: 'Sour Cream',
    },
    {
      ingredient_name: 'Cream of Chicken Soup',
    },
    {
      ingredient_name: 'Galic Salt',
    },
    {
      ingredient_name: 'Cheddar Jack Cheese',
    },
  ]);
};
