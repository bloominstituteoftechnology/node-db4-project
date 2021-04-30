exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { ingredient_name: "noodles", quantity: "1/2 package", step_number: 1 },
    { ingredient_name: "spaghetti sauce", quantity: "1/2 jar", step_number: 3},
    { ingredient_name: "pancake mix", quantity: "2 cups", step_number: 1 },
    { ingredient_name: "water", quantity: "2 cups", step_number: 1 }
  ]);
};
