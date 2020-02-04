
exports.seed = async function(knex) {
  await knex('recipes').insert([
    {id: 1, name: "Apple Pie"},
    {id: 2, name: "Oreo Milkshake"},
    {id: 3, name: "Pepperoni Pizza"}
  ])
};
