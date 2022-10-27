const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send('ok');
})
app.get('/uk', (re, res)=>{
    req(1);
    function req(id){
        console.log("Order : ", id, "Request time: ", Date.now())
        response(id, ()=>{
            console.log('Order Delivered : ', id);
            console.log('Delivered Time: ', Date.now());
            res.send({"sss":"ss"})
        })
    }

    function response(id, calback){
        setTimeout(()=>{
            calback(id);
        },5000)
    }

})


app.listen(3009, ()=>{
    console.log("Server running")
})

