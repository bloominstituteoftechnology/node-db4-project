
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: "heirloom tomato" },
    { ingredient_name: "basil" },
    { ingredient_name: "mozzarella cheese" },
    { ingredient_name: "extra virgin olive oil" },
    { ingredient_name: "flaky sea salt" },

    { ingredient_name: "Canned whole, peeled tomatoes" },
    { ingredient_name: "large yellow onion" },
    { ingredient_name: "butter" },
    { ingredient_name: "salt" },

    { ingredient_name: "Rice Krispies cereal" },
    { ingredient_name: "mini marshmallows" },
    { ingredient_name: "butter" }
  ])
};
