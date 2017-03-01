console.log('|--------|')
console.log('|  xtxt  |')
console.log('|--------|')

var parser = require('excel');
var xtxt = require('./xtxt')
var readlineSync = require('readline-sync');

// get filename
let filename = readlineSync.question('input filename: ');
console.log('filename: ' + filename);
  
parser(filename, function(err, data) {
  if (err) throw err;
  xtxt.render(data);
});
