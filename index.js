const express = require('express');
const routes = require('./routes');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

require('./services/passport');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// '/' , use the routes declared inside of here
// '/auth/signin'
// '/auth/signup'
app.use(routes);

app.listen(3001, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});
