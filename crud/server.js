const  express = require('express');
const env = require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
const todoRoute = require('./route/todo')
const db = require('./config/mongodb-connection')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use('/todo', todoRoute);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
