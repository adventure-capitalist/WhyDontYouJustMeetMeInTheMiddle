const express = require('express');
const app = express();
const port = 3000;

app.get('/superMiddlewear',(req, res, next) => {
    console.log('hello middlewear');
    next();
  },
  (req, res) => {
    res.send('hello world');
  }
);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});