
exports.seed = function(knex) {
  return knex('recipes').insert([
    {name: 'Meatloaf', temperature: '450 °F', serves: '6', time:'60 min'},
    {name: 'Pasta', temperature: '160 °F', serves: '8', time:'30 min'},
    {name: 'Oatmeal', temperature: '150 °F', serves: '2', time:'10 min'},
    {name: 'Omelette', temperature: '144 °F', serves: '1', time:'30 min'},
    {name: 'Mashed Potatoes', temperature: '170 °F', serves: '6', time:'40 min'}
  ]);
  
};
