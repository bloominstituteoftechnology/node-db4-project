exports.seed = function (knex) {
    return knex("ingredients")
      .del()
      .then(function () {
        return knex("ingredients").insert([
          { ingredient_id: 1, ingredient_name: "sauce", ingredient_quanity: 0 },
          { ingredient_id: 2, ingredient_name: "pepper", ingredient_quanity: 0 },
          { ingredient_id: 3, ingredient_name: "milk", ingredient_quanity: 0 },
        ]);
      });
  };