exports.seed = function (knex) {
  return knex("measurement_qty").insert([
    { qty_amount: 0.25 },
    { qty_amount: 0.5 },
    { qty_amount: 0.75 },
    { qty_amount: 1 },
    { qty_amount: 1.25 },
    { qty_amount: 1.5 },
    { qty_amount: 1.75 },
    { qty_amount: 2.0 },
    { qty_amount: 2.25 },
    { qty_amount: 2.5 },
    { qty_amount: 2.75 },
    { qty_amount: 3.0 },
    { qty_amount: 3.25 },
    { qty_amount: 3.5 },
    { qty_amount: 3.75 },
  ]);
};
