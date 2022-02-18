
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'cheese', quantity: '1 cup'},
        {ingredient_name: 'bread', quantity: '2 slices'},
        {ingredient_name: 'chicken breast', quantity: '1 lb'},
        {ingredient_name: 'salt & pepper', quantity: '1 tbsp'},
        {ingredient_name: 'lettuce', quantity: '16 ounces'},
        {ingredient_name: 'chicken breast', quantity: '1 lb'},
        {ingredient_name: 'salad dressing', quantity: '4 oz'},
        {ingredient_name: 'cheese', quantity: '2 cups'},
        {ingredient_name: 'macaroni', quantity: '4 cups'}
      ]);
    });
};
