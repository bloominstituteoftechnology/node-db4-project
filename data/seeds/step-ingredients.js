exports.seed = function (knex, Promise) {
    return knex('step-ingredients').insert([
        {  
            step_id:1,
        },
      {  
        step_id:2,
        ingredient_id:1,
        quantity:1.14,
      },
      {  
        step_id:2,
        ingredient_id:2,
        quantity:1.24,
      },


    ]);
  };