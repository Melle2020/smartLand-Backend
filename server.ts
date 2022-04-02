import express, { Express, Request, response, Response } from 'express';
import { App } from './src/app';
var cors = require('cors')
const bodyParser= require('body-parser')



//Url du reseau
const RPC_URL = "https://ithacanet.smartpy.io";
// const ACCOUNT_TO_CHECK = "tz1Xqa5LRU5tayDcZEFr7Sw2GjrbDBY3HtHH";

//cle du smart contract
const COUNTER_CONTRACT = "KT1LmvMf9iki8J4u7rdQDEFYBkAh9onuThAX";

const app: Express = express();

//Port de connection
const port = process.env.PORT|| 3000;
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//test de route
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');

//   new App(RPC_URL).addterrain(COUNTER_CONTRACT);
});

//test de route
app.post('/addTerrain',  (req:Request, res: Response) => {
    // console.log("response",res)

     let val:any
    return new Promise(resolve => {
        
        setTimeout(() => {
            
             val = new App(RPC_URL).addterrain(req.body,COUNTER_CONTRACT)
             console.log(val)
          
        }, 5000);

        setTimeout(() => {
            res.send(`request body:${val}`);
         
       }, 7000);

       
      });

      
           
         
    
//    res.send(`request body:${JSON.stringify(new App(RPC_URL).addterrain(req.body,COUNTER_CONTRACT))}`);

//    new App(RPC_URL).addterrain(req.body,COUNTER_CONTRACT);
//    res
  
});


app.get('/allTerrain',  (req:Request, res: Response) => {

    new App(RPC_URL).getAllTitrefoncier(COUNTER_CONTRACT)
  
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});