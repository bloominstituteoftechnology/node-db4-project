exports.seed = async function(knex) {
    return knex('ingredients').insert([   
      { ingredient_name: "pizza dough" },
      { ingredient_name: "red sauce" },
      { ingredient_name: "cheese" },
      { ingredient_name: "taco shell" },
      { ingredient_name: "beef" },
      { ingredient_name: "onions" },
      { ingredient_name: "hot sauce" },
    ]);
  };