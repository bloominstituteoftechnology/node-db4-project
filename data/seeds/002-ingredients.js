exports.seed = function(knex) {

  // Inserts seed entries
  return knex('ingredients').insert([
    {name:'pound of ground beef'},
    {name:'eggs'},
    {name:'potatoes'},
    {name:'pound of pasta'},
    {name:'gram of butter'},
    {name:'cup of tomatoes'},
    {name:'cup of oats'}
  ]);
  
};