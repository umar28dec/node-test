const  express = require('express');
const app = express();
const port = 3006;

app.get('/',(req, res)=>{
    res.send('hello from node server');
})
var myArray = [[[]]];
console.log(myArray)

app.listen(port, ()=>{
    console.log(`Sever is running on ${port}`);
})

