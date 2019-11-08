
exports.seed = function(knex) {
      return knex('instructions').insert([
        {recipe_id: 1, instruction: 'Cut the potatoes in wedges'},
        {recipe_id: 1, instruction: 'Season the fries with salt and other spices of your liking'},
        {recipe_id: 1, instruction: 'Slowly add it in hot oil and let it fry until golden brown'},
        {recipe_id: 2, instruction: 'Season and roll your ground beef to a patty'},
        {recipe_id: 2, instruction: 'Cook the patty on a grill until it is at the temperature of your liking then top it off with a slice of cheese'},
        {recipe_id: 2, instruction: 'Toast the buns on the grill'},
        {recipe_id: 2, instruction: 'Assemble the buns with the patty, a slice of tomato, lettuce and onions'},
        {recipe_id: 3, instruction: 'Bring enough water up to a boil'},
        {recipe_id: 3, instruction: 'Add the macaroni pasta and let it cook until it is al dante while occasionally stirring'},
        {recipe_id: 3, instruction: 'Once finished, drain the water and add the cheese'},
        {recipe_id: 3, instruction: 'Mix well then add more cheese on top to be baked'},
        {recipe_id: 3, instruction: 'When the cheese is melted you can also add some bread crumbs on top and you are good to go!'},
      ]);
};
