
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { instruction: 'Lorem ipsum dolor sit', recipe_id: 1 },
        { instruction: 'Sed ut perspiciatis unde', recipe_id: 1 },
        { instruction: 'Quis autem vel eum iure', recipe_id: 1 },
        { instruction: 'Nemo enim ipsam', recipe_id: 1 },
        { instruction: 'Duis aute irure dolor', recipe_id: 1 },
        { instruction: 'Ut enim ad minim', recipe_id: 2 },
        { instruction: 'Neque porro quisquam est', recipe_id: 2 },
        { instruction: 'Lorem ipsum dolor sit', recipe_id: 2 },
        { instruction: 'Sed ut perspiciatis unde', recipe_id: 2 },
        { instruction: 'Quis autem vel eum iure', recipe_id: 2 },
        { instruction: 'Nemo enim ipsam', recipe_id: 3 },
        { instruction: 'Ut enim ad minim', recipe_id: 3 },
        { instruction: 'Quis autem vel eum iure', recipe_id: 3 },
        { instruction: 'Duis aute irure dolor', recipe_id: 3 },
        { instruction: 'Neque porro quisquam est', recipe_id: 3 },
        { instruction: 'Sed ut perspiciatis unde', recipe_id: 4 },
        { instruction: 'Nemo enim ipsam', recipe_id: 4 },
        { instruction: 'Sed ut perspiciatis unde', recipe_id: 4 },
        { instruction: 'Quis autem vel eum iure', recipe_id: 4 },
        { instruction: 'Duis aute irure dolor', recipe_id: 4 },
        { instruction: 'Quis autem vel eum iure', recipe_id: 5 },
        { instruction: 'Lorem ipsum dolor sit', recipe_id: 5 },
        { instruction: 'Sed ut perspiciatis unde', recipe_id: 5 },
        { instruction: 'Neque porro quisquam est', recipe_id: 5 },
        { instruction: 'Nemo enim ipsam', recipe_id: 5 },
      ]);
    });
};
