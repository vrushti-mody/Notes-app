var bodyParser = require('body-parser')
var mongoose = require ('mongoose');
// mongoose.connect('mongodb+srv://vrushti:1234@cluster0-oa2ss.mongodb.net/test?retryWrites=true&w=majority');

// // Create a schema
// var todoSchema= new.mongoose.Schema({
//     item: String
// });

// var Todo= mongoose.model('Todo', todoSchema);
// var itemOne = Todo({item:'buy flour'}).save(function(err){
//     if (err) throw err;
//     console.log('Item saved')
// });


var data=[{item:'get milk'},{item:'walk'},{item:'get some'}]
var urlencodedParser= bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo',function(req,res){
        res.render('todo',{todos:data});
    });
    app.post('/todo',urlencodedParser, function(req,res){
        //res.render('todo');
        data.push(req.body);
        res.json(data);
    });
    app.delete('/todo/:item',function(req,res){
       // res.render('todo');
       data =data.filter(function(todo){
        
           return '-'+todo.item.replace(/ /g, '-')+'-' !== req.params.item;
       });
       res.json(data);
    });



};