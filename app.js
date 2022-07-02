const express = require('express');
const app = new express; //Part #1 Point 1
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');// Part #1 Point 2
const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/books/addbook",//Part #2 Point 6
        title:"Add Book"
    },
    {
        link:"/authors/addauthor",//Part #2 Point 6
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter'); // Part #1 Point 3 routing,part #2 point 6 require('./src/routes/homerouter') instead of require('./src/routes/homeroute')
const booksRouter = require('./src/routes/booksroute');// Part #2 Point 6
const authorsRouter = require('./src/routes/authorsroute');// Part #2 Point 6



app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));//Part #1 Point 2
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(5000,()=>{
    console.log("Server Ready on 5000");//Part #1 Point 5 server ready at port 5000 not 3000
});