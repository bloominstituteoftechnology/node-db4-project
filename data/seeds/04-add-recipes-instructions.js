
exports.seed = function(knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('recipes_instructions').insert([
        {instructions: 'Put pot or pan on the cooker'},
        {instructions: 'Boil water to 100c'},
        {instructions: 'Add contents to pot'}
      ]);
};
