exports.seed =async function(knex) {
    // Deletes ALL existing entries
    await knex("amount").insert([
      {amount: "1 cup"},
      {amount: "1/2 cup"},
      {amount: "1/4 cup"},
      {amount: "1/3 cup"},
      {amount: "1 tablespoon"},
      {amount: "1 teaspoon"},
      {amount: "2 tablespoons"},
      {amount: "1 egg"},
      {amount: "2 egg"},
      {amount: "3 egg"},
      
    ])
  };