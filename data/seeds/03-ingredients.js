
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {
          ingredients_name: 'baking mix/cooky-dough',
          quantity: '1'
        },
        {
          ingredients_name: 'vanilla',
          quantity: '2 tea-spoons'
        },
        { 
          ingredients_name: 'sugar',
          quantity: '4 table-spoons'
        },
      ]);
}

