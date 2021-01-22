
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Vanilla Ice Cream' },
        { name: 'Chocolate Ice Cream' },
        { name: 'Strawberry Ice Cream' },
        { name: 'Carmel Ice Cream' },
        { name: 'Pistachio Ice Cream' },
      ]);
    });
};
