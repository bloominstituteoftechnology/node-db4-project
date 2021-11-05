exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: 'slop' },
    { recipe_name: 'gruel' },
  ])
}
