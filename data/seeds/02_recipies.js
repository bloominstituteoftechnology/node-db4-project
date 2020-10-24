exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex("recipies").insert([
      {name: "gluten free pumpkin pancake mix" , instructions:"Preheat oven to 350 degrees F, whisp together egg and butter, stir in pancake mix , lightly grease griddle pan."},
      {name: "gluten free funfetti cake mix", instructions:"Preheat oven to 350 degrees F, whisp together cake mix, water, egg and oil, stir in a large bowl tile combined, bake for 34 - 38 min."},
      {name: "gluten free chocolate chip cookie mix" , instructions:"Preheat oven to 350 degrees F, whisp together cookie mix, egg, vanilla, and butter, stir in till combined, form round tablesspoon  balls and bake for 13-15 min. "},
      {name: "gluten free pumpkin bread mix", instructions: "Preheat oven to 350 degrees F, whisp together water, oil, egg and pumpkin mix, place in a greased bread pan, and bake for 50 - 55min."},
    ])
   
  };