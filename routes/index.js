var express = require('express');
var router = express.Router();

// 追加 1
var multer = require('multer');
var storage = multer.diskStorage({
  // ファイルの保存先を指定
  destination: function (req, file, cb) {
    cb(null, '')
  },
  // ファイル名を指定(オリジナルのファイル名を指定)
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })
//

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'xtxt' });
});

// 追加 2
router.post('/', upload.single('file'), function(req, res) {
  res.json({ 'result': 'success!' });
});
// 
 

module.exports = router;
