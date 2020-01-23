
exports.seed = function(knex) {

      return knex('ingredients').insert([
        {name: 'carrots'},
        {name: 'mince meat'},
        {name: 'potatoes'}
      ]);
    
};
