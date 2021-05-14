exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
      { ingredient_name: "Pizza Dough" }, 
      { ingredient_name: "Tomato Sauce" }, 
      { ingredient_name: "Cheese" }, 
      { ingredient_name: "Pepperoni" },
      { ingredient_name: "Cereal" }, 
      { ingredient_name: "Milk" }, 
      { ingredient_name: "Bread" }, 
      { ingredient_name: "Butter" }
    ]);
  };