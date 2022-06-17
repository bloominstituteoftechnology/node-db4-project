const server = require('./api/server');

const PORT = 9000;

server.listen(PORT, () => {
  console.log(`server is now running on port ${PORT}`)
})
