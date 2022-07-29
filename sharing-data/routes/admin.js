const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

//but this is shareda across users
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

//since using exports,
//make changes in app.js

exports.routes = router;
exports.products = products;
