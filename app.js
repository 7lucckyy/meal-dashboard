require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const db = require('./config/db');
const router = require('./routes/routes');

const app = express();

//Middlewares
app.use(morgan())
app.use('/api/v1', router);

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
    res.render('signin');
  });

app.get('/dashboard', (req, res)=>{
    res.render('dashboard');
});
app.get('/nhf-dashboard', (req, res)=>{
    res.render('nhf-dashboard');
});
app.get('/create-project', (req, res)=>{
    res.render('createproject');
});
app.get('/create-indicator', (req, res)=>{
    res.render('add-indicator');
});
app.get('/indicators', (req, res)=>{
    res.render('view-indicator');
});
app.get('/home', (req, res)=>{
    res.render('index');
});
app.get('/impact', (req, res)=>{
    res.render('widget');
});

//Database
try {
    db.authenticate();
    console.log('Database Connected Successfully');
} catch (e) {
    console.log('Something went wrong');
    console.log(e);
}

app.listen(PORT, ()=>{
    console.log("Server Running at 5000");
});