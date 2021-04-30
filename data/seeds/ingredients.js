exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { ingredient_name: "noodles", quantity: "1/2 package" },
    { ingredient_name: "spaghetti sauce", quantity: "1/2 jar" },
    { ingredient_name: "pancake mix", quantity: "2 cups" },
    { ingredient_name: "water", quantity: "2 cups" }
  ]);
};
