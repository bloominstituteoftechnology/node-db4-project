const dotenv = require("dotenv").config();
const PORT = process.env.PORT;

const server = require("./API/server");

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}, server live`);
});