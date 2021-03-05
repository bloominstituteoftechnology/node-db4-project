const server = require("./server");

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Running server at http://localhost:${port}`);
});
