exports.seed = function (knex) {
  return knex("recipes").insert([
    { recipe_name: "Bepperoni Beanza" },
    { recipe_name: "Bam Beanza" },
    { recipe_name: "Beggie Beanza" },
  ]);
};
