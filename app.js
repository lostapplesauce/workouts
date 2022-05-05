const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const ejsMate = require('ejs-mate');

mongoose.connect('mongodb://localhost:27017/workouts',{
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology:true
    // useFindandModify: false

    /* all these aren't needed in new Mongoose update */
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>{
    console.log("Database Connected");
});

// const welcomePage = require('./')

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req,res) => {
    res.render('welcome');
})

app.get('/biceps', (req,res) => {
    //This renders bicep.ejs from biceps folder
    res.render('./biceps/bicep');
})
app.get('/back', (req,res) => {
    //This renders back.ejs from backs folder
    res.render('./backs/back');
})
app.get('/tricep', (req,res) => {
    //This renders tricep.ejs from triceps folder
    res.render('./triceps/tricep');
})
app.get('/glutes', (req,res) => {
    //This renders glute.ejs from glutes folder
    res.render('./glutes/glute');
})
app.get('/chest', (req,res) => {
    //This renders chest.ejs from chests folder
    res.render('./chests/chest');
})
app.get('/quads', (req,res) => {
    //This renders quad.ejs from quads folder
    res.render('./quads/quad');
})
app.get('/hamstrings', (req,res) => {
    //This renders quad.ejs from quads folder
    res.render('./hamstrings/hamstring');
})
app.get('/calves', (req,res) => {
    //This renders quad.ejs from quads folder
    res.render('./calves/calve');
})

app.get('/new', (req,res) => {
    //This renders new.ejs file
    res.render('new');
})
app.get('/newCalve', (req,res) => {
    //This renders new.ejs file
    res.render('./calves/newCalve');
})
app.get('/new', (req,res) => {
    //This renders new.ejs file
    res.render('new');
})


app.listen(3001, () => {
    console.log("Serving on port 3001");
})