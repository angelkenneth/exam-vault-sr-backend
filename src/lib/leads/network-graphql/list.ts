import {Lead} from "@/lib/leads/local/lead";
import {gql, useQuery} from "@apollo/client";
import {graphqlClient} from "@/app/graphql/client";

export const useLeadListGraphqlQuery = () => useQuery<{ leads: Lead[] }>(gql`
  query Leads {
    leads {
      id
      name
      email
      mobile
      postcode
      service
    }
  }
`, {client: graphqlClient});
