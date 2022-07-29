const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, 'public')));

app.use(homeRoutes);
app.use(userRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
});

app.listen(3000);
