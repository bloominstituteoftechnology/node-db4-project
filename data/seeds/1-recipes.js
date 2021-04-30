exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "Spaghetti", ingredients_id: 1, instructions_id: 1 },
    { name: "Pancakes", ingredients_id: 1, instructions_id: 1 },
  ]);
};
