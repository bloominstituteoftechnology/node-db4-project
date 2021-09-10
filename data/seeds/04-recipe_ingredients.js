exports.seed = function (knex) {
  return knex('recipe_ingredients')
    .del()
    .then(function () {
      return knex('recipe_ingredients')
        .insert([
          {
            recipe_id: 1,
            ingredient_id: 1,
            quantity: 1
          },
          {
            recipe_id: 1,
            ingredient_id: 2,
            quantity: 1.5
          },
          {
            recipe_id: 1,
            ingredient_id: 3,
            quantity: 2.75
          },
          {
            recipe_id: 1,
            ingredient_id: 4,
            quantity: 1
          },
          {
            recipe_id: 1,
            ingredient_id: 5,
            quantity: 2
          },
          {
            recipe_id: 1,
            ingredient_id: 6,
            quantity: .25
          },
          {
            recipe_id: 1,
            ingredient_id: 7,
            quantity: 2
          },
          {
            recipe_id: 1,
            ingredient_id: 8,
            quantity: 2
          }
        ])
    })
}
