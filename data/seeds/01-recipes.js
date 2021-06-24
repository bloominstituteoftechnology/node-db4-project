exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Boil Eggs', created_at: "2021-06-24" },
      { recipe_name: 'Boil Pasta', created_at: "2021-06-24" }
    ]);
  };


  ////With the seeds, we're just creating the data