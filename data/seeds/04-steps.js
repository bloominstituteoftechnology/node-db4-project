exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    { 
      step_number: 1, 
      instruction: "Heat oven to 400°.", 
      recipe_id: 1
    },
    { 
      step_number: 2, 
      instruction: "In a large, oven-safe skillet over high heat, heat olive oil. As soon as pan and oil are hot, add tomatoes, season with salt and pepper, and transfer skillet to oven. Roast 15 minutes, until tomatoes are soft and browned on the bottom. Remove tomatoes from skillet and set aside, leaving remaining oil in the skillet.",recipe_id: 1
    },
    { 
      step_number: 3, 
      instruction: "Let skillet with oil sit on stovetop, off the heat, for 5 minutes, to cool slightly.", 
      recipe_id: 1
    },
    { 
      step_number: 4, 
      instruction: "Cut baguette into 2 equal pieces, then cut open lengthwise. Broil or toast baguettes.", 
      recipe_id: 1
    },
    { 
      step_number: 5, 
      instruction: "When skillet has cooled slightly, return to low heat. Add eggs and season with salt and pepper. Cook, stirring constantly, until small curds have formed but eggs are still slightly wet. Remove skillet from heat, stir in basil (if using) and cooked tomatoes.", 
      recipe_id: 1
    },
    { 
      step_number: 6, 
      instruction: "Spoon tomato-egg mixture onto toasted baguettes and sprinkle with shredded Parmesan.", 
      recipe_id: 1
    },
    { 
      step_number: 1, 
      instruction: "Heat oven to 400°.", 
      recipe_id: 2
    },
    { 
      step_number: 2, 
      instruction: "Season chicken thighs liberally with salt and pepper, and paprika.", 
      recipe_id: 2
    },
    { 
      step_number: 3, 
      instruction: "Heat a large, oven-safe skillet over medium heat. Add chicken, skin side down, and cook until skin crisps slightly and some fat is rendered, about 3 minutes. Transfer to oven and bake 15 minutes.", 
      recipe_id: 2
    },
    { 
      step_number: 4, 
      instruction: "Add fennel, flip chicken, then roast 10 minutes more, until fennel is starting to soften and brown and chicken is cooked through. Remove chicken and set aside, leaving fennel in skillet.", 
      recipe_id: 2
    },
    { 
      step_number: 5, 
      instruction: "Return skillet to low heat. Cook, stirring occasionally, until fennel is very soft, about 10 minutes. Add spinach and stir to wilt.", 
      recipe_id: 2
    },
    { 
      step_number: 6, 
      instruction: "Meanwhile, cut baguette into 2 6-inch pieces, then cut each piece in half lengthwise. Toast or broil baguettes to lightly crisp (optional).", 
      recipe_id: 2
    },
    { 
      step_number: 7, 
      instruction: "Remove bone from chicken and cut into thin strips, with skin still on", 
      recipe_id: 2
    },
    { 
      step_number: 8, 
      instruction: "Sandwich chicken, vegetable filling, and Parmesan between toasted baguettes.", 
      recipe_id: 2
    },
    { 
      step_number: 1, 
      instruction: "Heat oven to 400° and line a sheet pan with parchment paper.", 
      recipe_id: 3
    },
    { 
      step_number: 2, 
      instruction: "On the lined sheet pan, toss fennel and tomato with olive oil, salt, and pepper. Roast 25 minutes.", 
      recipe_id: 3
    },
    { 
      step_number: 3, 
      instruction: "Add white beans and basil to sheet pan and toss, then spread mixture evenly and roast 10 minutes more, until fennel is browned in places, tomatoes are very soft, and beans are warm.", 
      recipe_id: 3
    },
    { 
      step_number: 4, 
      instruction: "Let sit 5 minutes before serving. Serve topped with Parmesan.", 
      recipe_id: 3
    },
  ]);
};