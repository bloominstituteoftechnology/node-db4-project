exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "Omelette" },
    { name: "Breakfast Potatoes" },
    { name: "Steak and Potatoes" },
    { name: "Baked Chicken" },
    { name: "Garden Salad" }
  ])
}
