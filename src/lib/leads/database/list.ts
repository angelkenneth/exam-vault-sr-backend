import {db} from "@/db";
import {leadsTable} from "@/db/schema";
import {Lead} from "@/lib/leads/local/lead";

export const getDatabaseLeadList = (): Promise<Lead[]> =>
  db.select().from(leadsTable)
