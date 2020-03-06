exports.seed = async function (knex) {
  await knex("recipes").insert([
    { recipe_name: "Rice Bread" },
    { recipe_name: "Kremas" },
    { recipe_name: "Toast" }
  ]);
};