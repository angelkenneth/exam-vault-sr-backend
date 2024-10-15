import {Lead} from "@/lib/leads/local/lead";
import {gql, useMutation} from "@apollo/client";
import {graphqlClient} from "@/app/graphql/client";

export type PostLead = Omit<Lead, 'id'>;

export const useMutationCreateLead = () => useMutation<{ createLead: Lead }>(gql`
  mutation Mutation($input: PostLead!) {
    createLead(input: $input) {
      id
      name
      email
      mobile
      postcode
      service
    }
  }
`, {client: graphqlClient})
