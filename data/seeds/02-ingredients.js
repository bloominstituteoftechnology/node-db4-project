exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { ingredient_name: "bananas" },
    { ingredient_name: "banana sauce"}
  ]);
};
