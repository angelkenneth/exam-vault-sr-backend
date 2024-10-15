export const typeDefs = `#graphql

type Lead {
  id: ID!
  name: String!
  postcode: Int!
}
input PostLead {
  name: String!
  postcode: Int!
}
type Query {
  leads: [Lead]
  leadById(leadId: ID!): Lead
}
type Mutation {
  createLead(input: PostLead!): Lead
}

`;
