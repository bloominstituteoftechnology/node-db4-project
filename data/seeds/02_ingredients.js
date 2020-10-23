exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { name: "Eggs", quantity: "3" },
    { name: "Ham", quantity: "1/3 cup, diced" },
    { name: "Spinich", quantity: "1 cup" },
    { name: "Tomato", quantity: "1/3 cup, diced" },
    { name: "Onion", quantity: "1/4 cup, chopped" },
    { name: "Potato", quantity: "1" },
    { name: "Steak", quantity: "1 oz" },
    { name: "Chicken Breast", quantity: "1" },
    { name: "Iceburg Lettuce", quantity: "1 cup, chopped" },
    { name: "Cucumber", quantity: "1, sliced" },
    { name: "Salt", quantity: "Small pinch" },
    { name: "Pepper", quantity: "Small pinch" },
  ])
}
