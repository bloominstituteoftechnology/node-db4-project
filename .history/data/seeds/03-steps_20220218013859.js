exports.seed = function (knex) {
    return knex('steps').insert()
};
