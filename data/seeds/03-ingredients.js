exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
      { ingredient_name: "Boston", step_id: 1 },
      { ingredient_name: "Oil", step_id: 2 },
      { ingredient_name: "Dictionary", step_id: 3 },
      { ingredient_name: "Page", step_id: 4 },
    ]);
};