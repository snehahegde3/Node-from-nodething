const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Nowwww that you not my baby');
  next();
});

app.use((req, res, next) => {
  console.log('I go do whatever I want');
  next();
});

app.use('/users', (req, res, next) => {
  res.send('<h1>Hey user</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Home page</h1>');
});

app.listen(3000);
