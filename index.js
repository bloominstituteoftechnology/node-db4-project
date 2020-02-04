const app = require('./server');
console.log('starting...');

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
})