import {Lead} from "@/lib/leads/local/lead";
import {gql, useQuery} from "@apollo/client";
import {graphqlClient} from "@/app/graphql/client";

export interface NetworkLeadById {
  leadId: number;
}

export const useGraphqlLeadById = (leadId: string) => useQuery<{leadById: Lead}>(gql`
  query Leads($leadId: ID!) {
    leadById(leadId: $leadId) {
      id
      name
      email
      mobile
      postcode
      service
    }
  }
`, {client: graphqlClient, variables: { leadId }});
