exports.seed = function (knex) {
  return knex('recipes')
    .del()
    .then(function () {
      return knex('recipes')
        .insert([
          {
            recipe_id: 1,
            recipe_name: 'Snickerdoodles',
            created_at: knex.fn.now()
          },
          {
            recipe_id: 2,
            recipe_name: 'Gingersnaps',
            created_at: knex.fn.now()
          }
        ])
    })
}
