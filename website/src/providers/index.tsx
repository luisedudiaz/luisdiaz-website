import { FC } from "react";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import AuthProvider, { AuthContext } from "./auth.provider";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    credentials: "include",
    uri: "http://localhost:4000/graphql",
  }),
});

export const context = {
  client,
  auth: AuthContext,
};

const Providers: FC = (props) => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>{props.children}</AuthProvider>
    </ApolloProvider>
  );
};

export default Providers;
