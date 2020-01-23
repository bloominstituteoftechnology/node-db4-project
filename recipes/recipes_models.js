const db = require("../data/db_Config");

async function find(query = {}) {
  const { limit = 10, sortby = "id", sortdir = "asc" } = query;

  let rows = await db("recipes")
    .orderBy(sortby, sortdir)
    .limit(limit);

  return rows;
}

module.exports = { find };
