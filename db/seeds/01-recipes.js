exports.seed = function (knex) {
    
    return knex("recipes")
      .del()
      .then(function () {
        return knex("recipes").insert([
          { recipe_id: 1, recipe_name: "Wings" },
          { recipe_id: 2, recipe_name: "Pizza" },
          { recipe_id: 3, recipe_name: "Pasta" },
        ]);
      });
  };