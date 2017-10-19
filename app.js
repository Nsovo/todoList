const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

let todolist = [];
app.set('view engine' , 'ejs');



/* The to do list and the form are displayed */
app.get('/todo', function(req, res) {
    res.render('todo.ejs', { todolist, clickHandler:"func1();" });
})

/* Adding an item to the to do list */
.post('/todo/add/', urlencodedParser, function(req, res) {

    if (req.body.newtodo != '') {
        todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
})

/* Update an item on the to do list */
.get('/todo/edit/:id/:text', urlencodedParser, function (req, res) {
    
    if (req.params.id !== '') {
        let updatetodo = req.params.text;
        let id = req.params.id;
        res.render('todo.ejs', { todolist, updatetodo ,id});
        }
})

/* Update an item on the to do list */
.post('/todo/edit/:id', urlencodedParser, function(req, res) {

      if (req.body.updatetodo != '') 
               todolist.splice(req.params.id, 1, req.body.updatetodo);

    res.redirect('/todo');
})


/* Deletes an item from the to do list */
.get('/todo/delete/:id', function(req, res) {
    if (req.params.id != '') 
        todolist.splice(req.params.id, 1);
    
    res.redirect('/todo');
})

/* Redirects to the to do list if the page requested is not found */
.use(function(req, res, next){
    res.redirect('/todo');
})

.listen(8080, function() {
    console.log('Server started on port 8080');
    });
