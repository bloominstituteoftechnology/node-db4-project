
exports.seed = async function(knex) {
  // Inserts seed entries
  await knex('recipes').insert([
    {recipeName: 'buttered toast', recipeInstructions: 'put bread in toaster, push button on toaster, when toaster is finished, remove bread and spread butter on it'},
    {recipeName: 'pasta with sauce', recipeInstructions: 'put pasta in pot of boiling water, wait a few minutes until pasta is desired tenderness, remove from heat and drain pasta, open jar of sauce and pour onto pasta'},
    {recipeName: 'peanut butter and jelly sandwich', recipeInstructions: 'take two slices of bread, spread peanut butter on one, spread jelly on the other, put together to make sandwich'}
  ]);    
};
