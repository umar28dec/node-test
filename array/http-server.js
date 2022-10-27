const http = require('http');
const host ="localhost"
const port =3000

http.createServer((req, res)=>{
  res.write("Data send");
  res.end("ss");
}).listen(port, host, ()=>{
    console.log(`Server is running on ${host}:${port}`)
})
