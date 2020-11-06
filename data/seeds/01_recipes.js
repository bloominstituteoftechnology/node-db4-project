exports.seed = async function(knex){
  await knex("recipes").insert([
    {name: "Chicken Parmesan"},
    {name: "Chicken Alfredo"},
  ])
}