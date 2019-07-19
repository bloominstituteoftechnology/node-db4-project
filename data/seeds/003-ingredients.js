exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: '20 ml Ketchup' },
        { ingredient_name: 'One Bratwurst' },
        { ingredient_name: 'One lasagna noodle plate' },
        { ingredient_name: '200 ml tomato chunked' },
        { ingredient_name: '200 g mixed beef' },
        { ingredient_name: 'a hand full of mozzarella cheese' },
        { ingredient_name: 'half a lattice' },
        { ingredient_name: 'one kiwi' },
        { ingredient_name: 'a hand full of arugula' },
        { ingredient_name: '20ml crushed ice' },
        { ingredient_name: 'one hand full of spinach' },
        { ingredient_name: '20 ml olive oil' },
      ]);
    });
};
