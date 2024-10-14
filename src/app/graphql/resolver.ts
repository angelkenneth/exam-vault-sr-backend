import {PostLead} from "@/app/api/leads/_network/post";
import {getDatabaseLeadList} from "@/app/api/leads/_database/list";
import {postLeadSchema} from "@/app/api/leads/_validation/post";
import {createDatabaseLead} from "@/app/api/leads/_database/create";
import {leadByIdSchema} from "@/app/api/leads/_validation/get";
import {NetworkLeadById} from "@/app/api/leads/_network/get";
import {getDatabaseLeadById} from "@/app/api/leads/_database/get";

export const resolvers = {
  Query: {
    leads: () => getDatabaseLeadList(),
    leadById: async (_: never, input: NetworkLeadById) => {
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
    createLead: (_: never, input: { input: PostLead }) => {
      const {error, data} = postLeadSchema.safeParse(input.input);
      if (error) {
        throw error;
      }
      return createDatabaseLead(data)
    },
  },
};
