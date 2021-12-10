
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { ingredient_name: 'olive oil', measurement_unit: "TBSP"},
    { ingredient_name: 'Chuck Roast'},
    { ingredient_name: 'Bread', measurement_unit: "Slice(s)"},
    { ingredient_name: 'Pasta', measurement_unit: "Box"},
    { ingredient_name: 'Water', measurement_unit: "Ounces"},
    { ingredient_name: 'Marinara Sauce', measurement_unit: "Cups"},
  ]);
};