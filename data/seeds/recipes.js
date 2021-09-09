
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(() => {
      return knex('recipes').insert([
        {
          recipe_id: 1, 
          recipe_name: 'power puff girls', 
          created_at: "2021-01-01 08:23:19.120"
        },
        {
          recipe_id: 2, 
          recipe_name: 'second recipe', 
          created_at: "2021-01-01 08:23:19.120"
        },
      ]);
    });
};
