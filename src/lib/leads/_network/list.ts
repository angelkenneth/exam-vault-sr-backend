import {Lead} from "@/lib/leads/_local/lead";
import {gql, useQuery} from "@apollo/client";
import {graphqlClient} from "@/app/graphql/client";

export const useGraphqlLeadList = () => useQuery<{leads: Lead[]}>(gql`
  query Leads {
    leads {
      id
      name
      name
    }
  }
`, {client: graphqlClient});
