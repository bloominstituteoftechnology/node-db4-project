const measurements = [
  { measurement_in_cups: 2 },
  { measurement_in_cups: 1 },
  { measurement_in_cups: 0.5 }
]

exports.measurements = measurements

exports.seed = function (knex) {
  return knex('measurements').insert(measurements)
}