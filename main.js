console.log('')
console.log('  xtxt  ')
console.log('')

var parser = require('excel');

parser('testbook.xlsx', function(err, data) {
  if (err) throw err;

  // console.log(data);
  render(data);
});


function render(aa) {
  console.log('render()');

  // get max length (ml) of each col
  var ml = [];
  aa.forEach(function(r) {
    r.forEach(function(cell, i) {
      if (ml[i] == null || ml[i] < cell.length) {
        ml[i] = cell.length;
      }
    });
  });
  // join each row with spaces
  var txt = "";
  aa.forEach(function(r) {
    r.forEach(function(cell, i) {
      var spaces = Array(ml[i] - cell.length + 2 + 1).join(' '); // 余白2つ
      txt = txt + cell + spaces;
    });
    txt = txt + "\n";
  });

  console.log(txt);
}
