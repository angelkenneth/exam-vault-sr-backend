import {z} from "zod";

export const postLeadSchema = z.object({
  name: z.string(),
  age: z.number({coerce: true}).int().gt(0),
})
