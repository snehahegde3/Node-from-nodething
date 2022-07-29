const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
  //send a html file from the views folder using sendFile
  res.sendFile(path.join(rootDir, 'views', 'shop.html')); //allows to send any kind of response
  //the content-type is automatically set no need to be specified
  //we can however override this with res.setHeader
});

module.exports = router;
