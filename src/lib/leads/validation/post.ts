import {z} from "zod";

export const postLeadSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  mobile: z.string(),
  postcode: z.number({coerce: true}).int().gt(0).lte(99999),
})
