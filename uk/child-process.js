const express =require('express')
const app = express();
const {fork} = require('child_process');
app.get('/uk1', (req, res)=>{
    const child = fork('./long.js');
    child.send('start');
    child.on('message', (sum)=>{
        console.log(sum)
        res.send({sum:sum});
    })

})


app.listen(3000, ()=>{
    console.log('Server is running')
})

