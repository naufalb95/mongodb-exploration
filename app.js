const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes');

const { connect } = require('./config/mongo');

app.use(express.json());

app.use(router);

connect().then(() => {
  app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
  });
});
