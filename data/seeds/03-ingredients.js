exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { id: 1, name: 'Pasta'},
    { id: 2, name: 'Oil'},
    { id: 3, name: 'Garlic'},
    { id: 4, name: 'Lasagne'},
    { id: 5, name: 'Tomatoes'},
    { id: 6, name: 'Meat'}
  ])
}

