import {z} from "zod";

export const postLeadSchema = z.object({
  name: z.string(),
})
