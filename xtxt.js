var parser = require('excel');
var eaw = require('eastasianwidth');

module.exports = function (filename, callback) {

  // load xlsx file
  parser(filename, function(err, data) {
    if (err) throw err;
    render(data, callback);
  });
};

function render(aa, callback) {
  // get max length (ml) of each col
  var ml = [];
  aa.forEach(function(r) {
    r.forEach(function(cell, i) {
      var l = eaw.length(cell);
      if (ml[i] == null || ml[i] < l) {
        ml[i] = l;
      }
    });
  });
  // join each row with spaces
  var txt = "";
  aa.forEach(function(r) {
    r.forEach(function(cell, i) {
      var l = eaw.length(cell);
      var spaces = Array(ml[i] - l + 2 + 1).join(' '); // 余白2つ
      txt = txt + cell + spaces;
    });
    txt = txt + "\n";
  });

  var err;
  callback(txt, err);
}
