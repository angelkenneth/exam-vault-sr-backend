import {Lead} from "@/app/api/leads/_local/lead";
import {NetworkReturn} from "@/app/lib/data_or_error";
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

export const getNetworkLeadById = async (leadId: string): Promise<NetworkReturn<Lead>> => {
  return fetch(`http://localhost:3000/api/leads/${leadId}`, {
    method: 'GET',
  }).then(async (r) => ({
    success: r.status < 300,
    json: await r.json(),
  }))
}
