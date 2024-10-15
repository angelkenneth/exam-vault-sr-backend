import {PostLead} from "@/lib/leads/_network/post";
import {getDatabaseLeadList} from "@/lib/leads/_database/list";
import {postLeadSchema} from "@/lib/leads/_validation/post";
import {createDatabaseLead} from "@/lib/leads/_database/create";
import {leadByIdSchema} from "@/lib/leads/_validation/get";
import {NetworkLeadById} from "@/lib/leads/_network/get";
import {getDatabaseLeadById} from "@/lib/leads/_database/get";

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
