exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Beef'},
        {name: 'Rice'},
        {name: 'Beans'},
        {name: 'Dough'},
        {name: 'Sauce'},
        {name: 'Garlic'},
        {name: 'Onion'},
        {name: 'Spices'}
        
      ]);
    });
};
