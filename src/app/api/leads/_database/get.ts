import {db} from "@/db";
import {leadsTable} from "@/db/schema";
import {Lead} from "@/app/api/leads/_local/lead";
import {eq} from "drizzle-orm";

export const getDatabaseLeadById = (leadId: number): Promise<Lead> =>
  db.select().from(leadsTable).where(eq(leadsTable.id, leadId)).limit(1).then(r => r[0])
