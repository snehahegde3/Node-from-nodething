const path = require('path');
const express = require('express');
const router = express.Router();
const userData = require('./users');


router.get('/', (req, res, next)=>{
    const users = userData.users;
    res.render('home', {pageTitle: 'Home', users: users, path: '/'});
});
module.exports = router;
