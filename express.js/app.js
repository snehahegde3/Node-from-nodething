const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({ extended: false }));
//to deliver static files like css
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes); // /admin/add-product

app.use(shopRoutes);

//404 not found page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
});

app.listen(3000);
