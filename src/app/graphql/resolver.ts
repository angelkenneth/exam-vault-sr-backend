import {PostLead} from "@/lib/leads/network-graphql/post";
import {getDatabaseLeadList} from "@/lib/leads/database/list";
import {postLeadSchema} from "@/lib/leads/validation/post";
import {createDatabaseLead} from "@/lib/leads/database/create";
import {leadByIdSchema} from "@/lib/leads/validation/get";
import {NetworkLeadById} from "@/lib/leads/network-graphql/get";
import {getDatabaseLeadById} from "@/lib/leads/database/get";

export const resolvers = {
  Query: {
    leads: () => getDatabaseLeadList(),
    leadById: async (_: null, input: NetworkLeadById) => {
      const {error, data} = leadByIdSchema.safeParse(input);
      if (error) {
        throw error;
      }
      const leadId = data.leadId;
      const result = await getDatabaseLeadById(leadId)
      if (!result) {
        throw new Error(`Lead with id (${leadId}) does not exists`);
      }
      return result;
    }
  },
  Mutation: {
    createLead: (_: null, input: { input: PostLead }) => {
      const {error, data} = postLeadSchema.safeParse(input.input);
      if (error) {
        throw error;
      }
      return createDatabaseLead(data)
    },
  },
};
