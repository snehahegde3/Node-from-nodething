const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  const products = adminData.products;
  //rendering using ecpress
  //it searches for shop in the views with the pug as engine
  res.render('shop', { prods: products, docTitle: 'Shop', path: '/' });
  //passing the products into the template
});

module.exports = router;
