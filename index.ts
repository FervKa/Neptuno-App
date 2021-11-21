//MongoDB, Moongoose
import conectarBD from './db/db';

//GraphQL y apollo
import cors from 'cors'
import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {typeDefs} from './graphql/types'
import {resolvers} from './graphql/resolvers'


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
  typeDefs:typeDefs, 
  resolvers:resolvers,
});

const app = express();
app.use(express.json());//Midleware para usar request como tipo JSON

app.use(cors());

app.listen ({port: process.env.PORT || 4000}, async() =>{
  await conectarBD();
  await server.start()

  server.applyMiddleware({app}) //Se le pasan los mismo middleware de express al servidor de apollo
  // The `listen` method launches a web server.
  
   console.log(`🚀  Server ready`);    
  
})




