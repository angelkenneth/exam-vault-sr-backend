import {ListResponse} from "@/app/lib/api";
import {Lead} from "@/app/api/leads/_local/lead";
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

export const getNetworkLeadList = async () =>
  fetch('http://localhost:3000/api/leads', {
    method: 'GET',
  }).then(r => r.json() as Promise<ListResponse<Lead>>)
