
exports.seed = function(knex) {
      return knex('instruction').insert([
        {step: 'cook pasta according to package,heat oil in pan,cook onion & garlic 5 minutes, add meat,add sauce, add fresh parmesan cheese', minutes: '20', recipe_id: '2'},
        {step: 'season meat, form meat into balls, smash into patties, add to grill, add buns to grill when buns are almost done, add condiments to puns, put together', minutes: '15', recipe_id: '3'},
        {step: 'lightly toast bread, add peanut butter to both pieces of toast, add jelly to one piece, attach both pieces', minutes: '1', recipe_id: '1'}
      ]);
};
