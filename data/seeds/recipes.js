exports.seed = function (knex, Promise) {
    return knex('recipes').insert([
      { 
        recipe_name: "Spaghetti Bolognese", 
        created_at: "2021-01-01 08:23:19.120" 
      },
    ]);
  };