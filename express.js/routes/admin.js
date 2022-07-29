const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

const path = require('path');

//add routes top to bottom

//next is like used  to send to the next middleware
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  //the next function isnt executed unless this is called
  // next();
});

router.post('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
