const server = require("./api/server");

const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
