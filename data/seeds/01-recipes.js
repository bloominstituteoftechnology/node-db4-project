
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, recipe_name: 'Lasagna', instructions: 'join cheese, noodles, and sauce, and cook real good' },
        { id: 2, recipe_name: 'Choc Chip Cookies', instructions: 'take out of freezer and cook' },
        { id: 3, recipe_name: 'Chili', instructions: 'brown burger, add beans, tomato soup, and chili seasoning, let simmer' }
      ]);
    });
};
