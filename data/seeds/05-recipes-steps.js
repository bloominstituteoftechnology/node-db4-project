exports.seed = function(knex, Promise) {
    return knex('recipe_choices').insert([
      { recipe_choices_id:1,recipes_id: 1, steps_id: 1 },
      { recipe_choices_id:2,recipes_id: 2, steps_id: 2 },
      { recipe_choices_id:3,recipes_id: 3, steps_id: 3 },
     
 
     
    ]);
  };
  