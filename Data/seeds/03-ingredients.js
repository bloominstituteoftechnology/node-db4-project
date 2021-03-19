exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('ingredients').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('ingredients').insert([
          {ingredient_name: "Rice"},
          {ingredient_name: "Pomegranate Molasses"},
          {ingredient_name: "Pine Nuts"},
          {ingredient_name: "Grape Leaves"},
        ]);
      });
  };