exports.seed = function (knex, Promise) {
    return knex('ingredients').insert([
      { ingredient_name: "Olive oil" },
      { ingredient_name: "Sausage" },
      // { ingredient_name: "Onion" },
      // { ingredient_name: "Pepper" },
      // { ingredient_name: "Pork" },
      // { ingredient_name: "Beef" },
      // { ingredient_name: "Chicken" },
      // { ingredient_name: "Corn" }
    ]);
  };