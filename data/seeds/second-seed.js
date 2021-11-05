exports.seed = function (knex) {
  return knex("ingredients").insert([
    { ingredient_name: "Bepperoni" },
    { ingredient_name: "Bam" },
    { ingredient_name: "Beggies" },
  ]);
};
