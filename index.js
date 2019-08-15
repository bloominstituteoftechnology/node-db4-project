const server = require("./server");

const PORT = 8787;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
