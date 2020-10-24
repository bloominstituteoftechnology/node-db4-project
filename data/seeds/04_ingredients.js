exports.seed =async function(knex) {
    // Deletes ALL existing entries
    await knex("ingredients").insert([
      {name: "egg"},
      {name: "butter"},
      {name: "oil"},
      {name: "water"},
      {name: "vanilla extract"},
      {name: "gluten free pumpkin pancake mix"},
      {name: "gluten free funfetti cake mix"},
      {name: "gluten free chocolate chip cookie mix"},
      {name: "gluten free pumpkin bread mix"},
  
    ])
  };