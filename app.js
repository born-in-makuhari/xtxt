var express = require('express')
var app = express()

app.get('/ping', function(req, res) {
  res.send('xtxt is running!');
})

app.listen(3000, function() {
  console.log('xtxt is listening on port 3000')
})
