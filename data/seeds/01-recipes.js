exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Asian Chicken'  },
      { recipe_name: 'Thai Pork' },
      { recipe_name: 'Brekkie Sandwich' },
    ]);
  };