exports.seed = async function(knex){
  await knex("ingredients").insert([
    {name: "Chicken Breast"},
    {name: "Penne Pasta"},
    {name: "Marinara"},
    {name: "Breadcrumbs"},
    {name: "Seasoning"},
    {name: "Alfredo Sauce"},
  ])
}