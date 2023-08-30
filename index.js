require("dotenv").config;
const server = require("./api/server");

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
