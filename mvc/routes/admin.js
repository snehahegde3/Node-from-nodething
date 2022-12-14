const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const productController = require('../controllers/products');
const { builtinModules } = require('module');

// /admin/add-product => GET
router.get('/add-product', productController.getAddProsuct);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;
