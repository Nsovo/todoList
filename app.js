const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

let todolist = [];
app.set('view engine' , 'ejs');
//app.set('views', path.join(__dirname, 'views'))

//let showdata= false;
// edit() {
 //   this.exists = !this.exists;
  //}


var show = function (req, res, next) {
  var hideInfo = true;
  res.send(hideInfo)
  next()
} 




/* The to do list and the form are displayed */
app.get('/todo', function(req, res) {
    var showdata = true;
    res.render('todo.ejs', { todolist,showdata, clickHandler:"func1();" });
})

/* Adding an item to the to do list */
.post('/todo/add/', urlencodedParser, function(req, res) {

    if (req.body.newtodo != '') {
        todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
})

/* update an item on the to do list */
app.patch('/todo/edit/', urlencodedParser, function(req, res){
    if (req.body.edittext != '') {
        todolist.splice(req.body.todoid, 1, req.body.edittext);
    }
    res.redirect('/todo');
})

/* Deletes an item from the to do list */
.get('/todo/delete/:id', function(req, res) {
    if (req.params.id != '') {
        todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})

/* Redirects to the to do list if the page requested is not found */
.use(function(req, res, next){
    res.redirect('/todo');
})

.listen(8080, function(){
    console.log('Server started on port 8080')
});
