export const typeDefs = `#graphql

type Lead {
  id: ID!
  name: String!
  age: Int!
}
input PostLead {
  name: String!
  age: Int!
}
type Query {
  leads: [Lead]
  leadById(leadId: ID!): Lead
}
type Mutation {
  createLead(input: PostLead!): Lead
}

`;
