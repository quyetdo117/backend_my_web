const express = require('express');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');
const db = require('./config/db')


const app = express();

// contect db
db.connect();

const post = 8000;
// logger
app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app);



app.listen(post, () => {
    console.log('lay url http://localhost:' + post)
})