exports.seed = function (knex) {
  return knex("ingredients").insert([
    { ingredient_name: "Bepperoni", ingredient_unit: "slice" },
    { ingredient_name: "Bam", ingredient_unit: "slice" },
    { ingredient_name: "Beggies", ingredient_unit: "slice" },
  ]);
};
