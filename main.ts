//=============================================
// https://docs.deno.com/runtime/tutorials/how_to_with_npm/apollo
//=============================================
// IMPORTS
// =============================================
import { ApolloServer } from "npm:@apollo/server@^4.1";
import { startStandaloneServer } from "npm:@apollo/server@4.1/standalone";
import { graphql } from "npm:graphql@16.6";

import { typeDefs } from "./schema.ts";
import { resolvers } from "./resolvers.ts";

import mongoose from "mongoose";

//=============================================
try{
    const MONGO_URL = Deno.env.get("MONGO_URL"); // Cargo el .env

    if(!MONGO_URL) {
        console.error("MONGO_URL must be provided");
        Deno.exit(1);
    }

    await mongoose.connect(MONGO_URL); // Me conecto a la base de datos
    
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    
    const { url } = await startStandaloneServer(server, {
      listen: { port: 3000 },
    });
    
    console.log(`Server running on: ${url}`);


} catch(e) {
    console.error(e);
}