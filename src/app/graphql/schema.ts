export const typeDefs = `#graphql

type Lead {
  id: ID!
  name: String!
  email: String!
  mobile: String!
  postcode: Int!
  service: String!
}
input PostLead {
  name: String!
  email: String!
  mobile: String!
  postcode: Int!
  service: String!
}
type Query {
  leads: [Lead]
  leadById(leadId: ID!): Lead
}
type Mutation {
  createLead(input: PostLead!): Lead
}

`;
