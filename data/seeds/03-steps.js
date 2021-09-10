exports.seed = function (knex) {
  return knex('steps')
    .del()
    .then(function () {
      return knex('steps')
        .insert([
          {
            step_id: 1,
            step_number: 1,
            instructions: `Cream butter and sugar until smooth. Add eggs, one at a time. Combine flour, soda, tartar, and salt. Stir into butter mixture. Chill for 30 minutes.`,
            recipe_id: 1
          },
          {
            step_id: 2,
            step_number: 2,
            instructions: `Preheat oven to 400 degrees F. Line cookie sheet with parchment or grease.`,
            recipe_id: 1
          },
          {
            step_id: 3,
            step_number: 3,
            instructions: `Mix cinnamon with remaining sugar. Roll dough into walnut-sized balls and roll in mixture; place 2 inches apart on prepared cookie sheet.`,
            recipe_id: 1
          },
          {
            step_id: 4,
            step_number: 4,
            instructions: `Bake for 8 minutes; cool and enjoy!`,
            recipe_id: 1
          }
        ])
    })
}
