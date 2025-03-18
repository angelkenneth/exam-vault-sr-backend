import { z } from 'zod';

export const leadByIdSchema = z.object({
  leadId: z.number({ coerce: true }),
});
