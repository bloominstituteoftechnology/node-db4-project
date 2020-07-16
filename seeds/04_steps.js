exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps").insert([
    { recipe_id: 1, step_num: 1, instructions: "Heat oven" },
    { recipe_id: 1, step_num: 2, instructions: "Mix butter and sugar" },
    { recipe_id: 1, step_num: 3, instructions: "Beat in egg and vanilla" },
    { recipe_id: 1, step_num: 4, instructions: "Bake 10 minutes" },
  ]);
};
