var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var xtxt = require('../xtxt.js');

var upload = multer({ dest: './tmp/' });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'xtxt' });
});

router.post('/', upload.single('file'), function(req, res) {
  console.log(req.file.path);
  xtxt(req.file.path, function(txt, err) {
    console.log(txt);
    res.render('index',{ title: 'xtxt', txt: txt });
  });
});
 

module.exports = router;
