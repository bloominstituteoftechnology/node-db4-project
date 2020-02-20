exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
     {recipeName: "Chicken Tacos"},
     {recipeName: "Hamburgers"},
     {recipeName: "Pancakes"},
    ]);
  };
  