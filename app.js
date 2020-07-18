const express = require('express');

const  mongoose = require('mongoose')

const cors = require('cors');
require('dotenv/config');
const bodyParser = require('body-parser')
const app = express();


//middleware
app.use(cors());
app.use(bodyParser.json());



//import Routes
const postRoutes = require('./routes/posts');

app.use('/posts',postRoutes);


//connect to db
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },() => {
    console.log("mongo db connected")
});


app.listen(3000);