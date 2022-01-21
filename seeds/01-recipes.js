
exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Simple Macaroni and Cheese' },
      { recipe_name: 'Lasagna Flatbread'}
    ]);
  };
  