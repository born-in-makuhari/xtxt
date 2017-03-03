console.log('|--------|')
console.log('|  xtxt  |')
console.log('|--------|')

var xtxt = require('./xtxt')
var readlineSync = require('readline-sync');

// get filename
let filename = readlineSync.question('input filename: ');

console.log(xtxt(filename));  
