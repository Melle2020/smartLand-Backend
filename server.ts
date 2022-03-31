import express, { Express, Request, Response } from 'express';
import { App } from './src/app';


//Url du reseau
const RPC_URL = "https://ithacanet.smartpy.io";
// const ACCOUNT_TO_CHECK = "tz1Xqa5LRU5tayDcZEFr7Sw2GjrbDBY3HtHH";

//cle du smart contract
const COUNTER_CONTRACT = "KT1LmvMf9iki8J4u7rdQDEFYBkAh9onuThAX";

const app: Express = express();

//Port de connection
const port = 3000;

//test de route
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
//   new App(RPC_URL).addterrain(COUNTER_CONTRACT);
});

//test de route
app.get('/addTerrain', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
  new App(RPC_URL).addterrain({},COUNTER_CONTRACT);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});