exports.seed = function (knex) {
    return knex('recipes').insert([
      { recipe_name: 'Grilled Cheese Sandwich' },
      { recipe_name: 'Tomato Soup' },
    ])
  }