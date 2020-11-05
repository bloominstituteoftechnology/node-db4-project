
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ing_name: 'milk'},
        {id: 2, ing_name: 'butter'},
        {id: 3, ing_name: 'cheese mix'},
        {id: 4, ing_name: 'chocolate mix'},
        {id: 5, ing_name: 'water'},
        {id: 6, ing_name: 'macaroni noodles'},
        {id: 7, ing_name: 'bread'},
        {id: 8, ing_name: 'Beanut Butter'},
        {id: 9, ing_name: 'Jelley'}
      ]);
    });
};
