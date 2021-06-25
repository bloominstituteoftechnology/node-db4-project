
exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
      { ingredient_name: "water", step_id: 2  }, 
      { ingredient_name: "salt", step_id: 2 }, 
      { ingredient_name: "egg", step_id: 3  }
    ]);
  };