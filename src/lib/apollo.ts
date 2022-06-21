import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oazt1h1ja301z77msi2lw0/master",
  cache: new InMemoryCache(),
});
