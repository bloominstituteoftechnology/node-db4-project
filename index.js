require('dotenv').config()

const server = require('./api/server');
// eslint-disable-next-line no-undef
const port = process.env.PORT

server.listen(port, () => {
  console.log(`listening on ${port}`)
});








