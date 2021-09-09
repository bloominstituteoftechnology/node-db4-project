exports.seed = function (knex) {
  return knex('ingredients')
    .del()
    .then(function () {
      return knex('ingredients')
        .insert([
          {
            ingredient_id: 1,
            ingredient_name: 'butter'
          },
          {
            ingredient_id: 2,
            ingredient_name: 'white sugar'
          },
          {
            ingredient_id: 3,
            ingredient_name: 'all-purpose flour'
          },
          {
            ingredient_id: 4,
            ingredient_name: 'baking soda'
          },
          {
            ingredient_id: 5,
            ingredient_name: 'cream of tartar'
          },
          {
            ingredient_id: 6,
            ingredient_name: 'salt'
          },
          {
            ingredient_id: 7,
            ingredient_name: 'ground cinnamon'
          },
          {
            ingredient_id: 8,
            ingredient_name: 'egg'
          }
        ])
    })
}
