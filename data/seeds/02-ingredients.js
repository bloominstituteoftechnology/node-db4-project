exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([   
      { ingredient_name: 'chicken thigh', ingredient_unit: "lbs" },
      { ingredient_name: 'rice', ingredient_unit: "cups" },
      { ingredient_name: 'bok choy', ingredient_unit: "oz" },
      { ingredient_name: 'bread', ingredient_unit: "slices" },
      { ingredient_name: 'bacon', ingredient_unit: "strips" },
      { ingredient_name: 'egg', ingredient_unit: "eggs" },
    ]);
  };