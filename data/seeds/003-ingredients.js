exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { name: "Banana", quantity: "3" },
    { name: "Chocolate", quantity: "12 squares" },
    { name: "White Chocolate", quantity: "6 squares" },
    { name: "Nuts", quantity: "4 cups" },
    { name: "Apple", quantity: "2" },
    { name: "vanilla", quantity: "1 tbsp" },
    { name: "ice cream", quantity: "6 cups" },
  ])
}