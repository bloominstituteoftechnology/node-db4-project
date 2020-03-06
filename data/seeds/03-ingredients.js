
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'Pasta'},
        {id: 2, ingredient: 'Pasta Sauce'},
        {id: 3, ingredient: 'Parm'},
        {id: 4, ingredient: 'Piece(s) of Bread'},
        {id: 5, ingredient: 'Mayo'},
        {id: 6, ingredient: 'Mustard'},
        {id: 7, ingredient: 'Ham'},
      ]);
    });
};
