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

  

}
