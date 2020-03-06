exports.seed = async function (knex) {
  await knex("steps").insert([
    { step_number: 1, step_description: 'Mix rice flour with baking soda, cinnamon and salt', recipe_id: 1 },
    { step_number: 2, step_description: 'Blend the mix with condensed milk, evaporated milk and coconut milk', recipe_id: 1 },
    { step_number: 3, step_description: 'Heat up olive oil', recipe_id: 1 },
    { step_number: 4, step_description: 'Apply some of the heated oil on baking pan, pour the blended mix and add the rest of the oil on top', recipe_id: 1 },
    { step_number: 5, step_description: 'Bake on the oven at 400 degree for 45 minutes', recipe_id: 1 },
    { step_number: 6, step_description: 'Serve', recipe_id: 1 },
    { step_number: 1, step_description: 'Pour condensed milk, evaporated milk and coconut milk into a bowl and stir', recipe_id: 2 },
    { step_number: 2, step_description: 'Add cinnamon and nutmeg and stir', recipe_id: 2 },
    { step_number: 3, step_description: 'Add cinnamon lemon juice and stir', recipe_id: 2 },
    { step_number: 4, step_description: 'Add rum and stir for 10 minutes', recipe_id: 2 },
    { step_number: 5, step_description: 'Serve', recipe_id: 2 },
    { step_number: 1, step_description: 'Apply butter', recipe_id: 3 },
    { step_number: 2, step_description: 'Toast bread in pan on oven', recipe_id: 3 },
    { step_number: 3, step_description: 'Serve', recipe_id: 3 }
  ]);
};