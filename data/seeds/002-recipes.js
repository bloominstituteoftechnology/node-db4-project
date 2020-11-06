exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "Plain Frozen Banana" },
    { name: "Classic Bluth Banana" },
    { name: "White CHocolate Banana" },
    { name: "Nutty Banana" },
    { name: "Banana" }
  ])
}