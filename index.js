const { ServerStyleSheets } = require('@material-ui/styles');
const server = require('./api/server')

const PORT = process.env.PORT || 9000;

server.listen(`Listening on port ${PORT}!!`)