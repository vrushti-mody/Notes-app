var express = require('express')
const port = process.env.PORT || 3000
var todoController= require('./controllers/todoController')

var app = express()

app.set('view engine', 'ejs');

app.use('/assets',express.static('./public'));

todoController(app);
app.listen(port);
console.log('Love you 3000 (port)');

