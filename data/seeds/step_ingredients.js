exports.seed = function (knex) {
    return knex('step_ingredients').insert([
      { ingredient_name: 'Bread' },
      { ingredient_name: 'Butter' },
      { ingredient_name: 'Cheese' },
      { ingredient_name: 'Cambells Tomato Soup' },
      { ingredient_name: 'Water' },
    ])
  }