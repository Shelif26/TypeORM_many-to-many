import express from "express";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { DBConnections } from "./src/Resources/Datasource";
import { resolvers } from "./src/Graphql/resolvers";
import { typeDefs } from "./src/Graphql/typeDefs";

const app = express()

let apolloServer : any

const schema = makeExecutableSchema({
  resolvers,typeDefs
})

 const startServer=async () => {
  apolloServer = new ApolloServer({
    schema: schema,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer()

DBConnections.initialize()
  .then(() =>
    console.log("<-------------DB established successfully------------>")
  )
  .catch((err) => console.log(err));

app.listen(9090,()=>{
    console.log("<-------------------Server Connected successfully----------------->");
    
})