import {Lead} from "@/lib/leads/_local/lead";
import {gql, useQuery} from "@apollo/client";
import {graphqlClient} from "@/app/graphql/client";

export interface NetworkLeadById {
  leadId: number;
}

export const useGraphqlLeadById = (leadId: string) => useQuery<{leadById: Lead}>(gql`
  query Leads($leadId: ID!) {
    leadById(leadId: $leadId) {
      id
      age
      name
    }
  }
`, {client: graphqlClient, variables: { leadId }});
