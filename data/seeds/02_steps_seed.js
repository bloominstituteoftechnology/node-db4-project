
exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {
      step_num: 1,
      step_text: "Cut and peel 1 onion in half, trimming the hairy end off",
      recipe_id: 2
    },
    {
      step_num: 2,
      step_text: "Melt 3 tbsp butter in a warm pan",
      recipe_id: 2
    },
    {
      step_num: 3,
      step_text: "Pour 2 cans of whole peeled tomatoes into the pan and simmer for 20 minutes.",
      recipe_id: 2
    },
    {
      step_num: 4,
      step_text: "After 20 minutes, place half of the onion flat-side down into the tomatoes and allow to simmer for 40 more minutes",
      recipe_id: 2
    },
    {
      step_num: 1,
      step_text: "Prepare 2 tomatoes into 1/2 inch slices, 8 oz of mozzarella into 1/2 inch slices, and plucking the leaves off 3 sprigs of basil.",
      recipe_id: 1
    },
    {
      step_num: 2,
      step_text: "Arrange on a plate with tomato slices on the bottom, then cheese, then basil.",
      recipe_id: 1
    },
    {
      step_num: 3,
      step_text: "Drizzle olive oil over the tops of the little stacks so that every bite has a little.",
      recipe_id: 1
    },
    {
      step_num: 4,
      step_text: "Sprinkle a pinch of flaky sea salt over each one and enjoy.",
      recipe_id: 1
    },

    {
      step_num: 1,
      step_text: "Melt 1 stick of butter and 12 oz of mini marshmallows in a saucepan over low heat for around 15 minutes.",
      recipe_id: 3
    },
    {
      step_num: 2,
      step_text: "Once fully melted and incorporated, pour over 1 box of Rice Krispies cereal in a heat-safe bowl.",
      recipe_id: 3
    },
    {
      step_num: 3,
      step_text: "After quickly scraping all the mixture out, quickly and gently mix the cereal and marshmallow mixture together.",
      recipe_id: 3
    },
    {
      step_num: 4,
      step_text: "Smooth out onto a greased tray as evenly as possible and let set and cool for at least 1 hour.",
      recipe_id: 3
    },
    {
      step_num: 5,
      step_text: "Slice into squares and enjoy",
      recipe_id: 3
    },

  ])
};
