const server = require('./api/server');

require('dotenv').config();
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log('listening on port', PORT);
    console.log(process.env.MESSAGE);
});

server.use('/api', () => {});

server.use('/', (req, res) => {
    res.send('<h1>Hello from index.js</h1>');
});