exports.seed = function(knex) {
        return knex('steps').insert([
          { instruction: 'gather ingredients', recipe_id: 1 },
          { instruction: '???', recipe_id: 1 },
          { instruction: 'profit', recipe_id: 1 }
        ]);
  };