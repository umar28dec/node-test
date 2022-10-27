import express, { Express, Request, Response } from "express";
import  dotenv  from "dotenv";
dotenv.config();

const app:Express = express();

app.get('/', (req:Request, res:Response)=>{
    res.send('Hello')
})

const port = process.env.PORT;
app.listen(port, ()=>{
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})