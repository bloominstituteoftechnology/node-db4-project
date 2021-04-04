exports.seed = function(knex, Promise) {
    return knex('recipe_steps').insert([
      { recipe_id: 1, steps_id: 1 },
      { recipe_id: 2, steps_id: 2 },
      { recipe_id: 3, steps_id: 3 },
      { recipe_id: 4, steps_id: 4 },
      { recipe_id: 5, steps_id: 5 },
      { recipe_id: 6, steps_id: 6 },
      { recipe_id: 7, steps_id: 7 },
 
     
    ]);
  };
  