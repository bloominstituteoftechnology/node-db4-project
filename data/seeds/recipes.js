exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "Spaghetti", created: knex.raw("current_timestamp") },
    { name: "Pancakes", created: knex.raw("current_timestamp") },
  ]);
};
