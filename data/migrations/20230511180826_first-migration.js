/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable("", () => {})
    .createTable("", () => {})
    .createTable("", () => {})
    .createTable("", () => {});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("", () => {})
    .dropTableIfExists("", () => {})
    .dropTableIfExists("", () => {})
    .dropTableIfExists("", () => {});
};
