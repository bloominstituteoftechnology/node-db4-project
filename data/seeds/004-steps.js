exports.seed = function(knex) {

  // Inserts seed entries
  return knex('steps').insert([
    {recipe_id: 1, instruction: 'Thaw ground beef'},
    {recipe_id: 1, instruction: 'Add desired spices and mold into a meatloaf'},
    {recipe_id: 2, instruction: 'Boil water with salt'},
    {recipe_id: 2, instruction: 'Cook pasta until tender and add tomatoe sauce'},
    {recipe_id: 3, instruction: 'Boil water'},
    {recipe_id: 3, instruction: 'Insert oats and cook until it becomes thick'},
    {recipe_id: 4, instruction: 'Pour olive oil in pan'},
    {recipe_id: 4, instruction: 'Beat eggs together and add a splash of cold water'},
    {recipe_id: 5, instruction: 'Wash, slice, and place potatoes in a pot filled with water'},
  ]);
  
};