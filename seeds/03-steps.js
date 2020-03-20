
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, instructions: 'Saute Onions and Garlic in large piot', recipe_id:1},
        {step_number: 2, instructions: 'Brown ground meat', recipe_id:1},
        {step_number: 3, instructions: 'Open and wash beans', recipe_id:1},
        {step_number: 4, instructions: 'Open sauce', recipe_id:1},
        {step_number: 5, instructions: 'Combine all above ingredients in pot', recipe_id:1},
        {step_number: 6, instructions: 'Add spices as desire cumin, chili, paprika, and basil', recipe_id:1},
        {step_number: 7, instructions: 'Stir occasionally on medium heat until low simmer', recipe_id:1},
        {step_number: 8, instructions: 'Cover and let simmer for about 1 hour', recipe_id:1},
        {step_number: 9, instructions: 'When completed give good stir service with rice and cheddar cheese', recipe_id:1},

        {step_number: 1, instructions: 'Wash oven roast aprox 5lb', recipe_id:2},
        {step_number: 2, instructions: 'Slit holes in bottom of roast with knife aprox half inch in length and inch in depth', recipe_id:2},
        {step_number: 3, instructions: 'Insert full cloves of garlic in holes on bottom of roast', recipe_id:2},
        {step_number: 4, instructions: 'Place slotted side of roast down on dutch pan with cover', recipe_id:2},
        {step_number: 6, instructions: 'If desired braze meat in pan and use scrapping for gravy', recipe_id:2},
        {step_number: 5, instructions: 'Cut up carrots celery and potatoes place around roast', recipe_id:2},
        {step_number: 6, instructions: 'Preheat over to 275 degrees (f) let cook for 2 hours', recipe_id:2},
        {step_number: 7, instructions: 'Higher temp to 325 degrees (f) let cook for 20 mins more', recipe_id:2},
        {step_number: 8, instructions: 'Take out of oven and let rest for 5 - 10 mins server in think slices', recipe_id:2},
        

        {step_number: 1, instructions: 'Roll out dough and cut into 3in x 3in squares', recipe_id:3},
        {step_number: 2, instructions: 'Choose favorite filling ie shredded chickenm ground beef, pull pork with and/or rice', recipe_id:3},
        {step_number: 3, instructions: 'Place filling on half of triangle form of dough', recipe_id:3},
        {step_number: 4, instructions: 'Flip other side of dough pinch edges to press with fork to seal in filling', recipe_id:3},
        {step_number: 5, instructions: 'Place triangle pouches onto greased cookie sheet preheat over to 350 degree (f)', recipe_id:3},
        {step_number: 6, instructions: 'Cook about 30 mins until dough is golden brown', recipe_id:3},
        {step_number: 7, instructions: 'Let cool, server with favorite condoments ie. sour cream, salsa, gucamole', recipe_id:3},

        
        {step_number: 1, instructions: 'Get minute rice', recipe_id:4},
        {step_number: 2, instructions: 'Do not read directions', recipe_id:4},
        {step_number: 3, instructions: 'Use ratios designed for standard rice not minute rice (standard ratio 1 to 2 minute ratio 1 to 1) ', recipe_id:4},
        {step_number: 4, instructions: 'Mix until realization occurs that something is wrong', recipe_id:4},
        {step_number: 5, instructions: 'Wait until you are informed that you have made rice soup', recipe_id:4},

      ]);
    });
};
