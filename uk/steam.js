const fs = require('fs');
const readStream = fs.createReadStream('uk1.csv')
readStream.setEncoding('UTF8')
var final = [];
readStream.on('data', (data)=>{
    console.log("================================================================================================")
    console.log(data)
    console.log("================================================================================================")

})

readStream.on('error',()=>{
    console.log('error')
})

readStream.on('end', ()=>{
    console.log('end')
    console.log(final);
})

readStream.on('open', ()=>{
    console.log('onen')
})
