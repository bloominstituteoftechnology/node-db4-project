
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_name: 'add'},
        {step_name: 'mix'},
        {step_name: 'crack'},
        {step_name: 'bake'},
        {step_name: 'boil'},
        {step_name: 'cool'},
        {step_name: 'shake'}

      ]);
    });
};
