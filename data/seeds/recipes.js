exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipes").truncate();
  await knex("recipes").insert([
    { recipe_name: "mashed potatoes" },
    { recipe_name: "texas sheet cake" },
    { recipe_name: "carne asada tacos" },
  ]);
};
