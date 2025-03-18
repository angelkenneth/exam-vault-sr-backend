import {z} from "zod";
import {BrighteService} from "@/lib/leads/local/services";

export const createLeadSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  mobile: z.string(),
  postcode: z.number({coerce: true}).int().gt(0).lte(99999),
  service: z.nativeEnum(BrighteService, {})
})
