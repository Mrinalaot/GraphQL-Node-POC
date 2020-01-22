import { GraphQLServer } from "graphql-yoga";
import db from "./db";
import Query from "./resolvers/Query";

const PORT = process.env.PORT || 5000
const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: {
        Query
    },
    context: {
        db
    }
});

server.start( { port : PORT },() => {
    console.log("The server is up!");
});
