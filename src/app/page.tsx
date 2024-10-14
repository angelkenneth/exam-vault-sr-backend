"use client";
import {graphqlClient} from "@/app/graphql/client";
import {ApolloProvider} from '@apollo/client';

export default function Home() {
  return (
    <>
      <ApolloProvider client={graphqlClient}>
        <h1>A K Tolentino (004)</h1>
        <ul>
          <li>
            <a href="/leads_rest">Leads (REST)</a>
          </li>
          <li>
            <a href="/leads_graphql">Leads (GraphQL)</a>
          </li>
        </ul>
      </ApolloProvider>
    </>
  );
}
