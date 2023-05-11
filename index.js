const server = require("./api/server");

const PORT = process.env.PORT || 3000;

server.listin(PORT, () => {
  console.log(`Listing on port ${PORT} lets get active`);
});
