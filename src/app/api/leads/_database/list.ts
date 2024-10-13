import {db} from "@/db";
import {leadsTable} from "@/db/schema";
import {Lead} from "@/app/api/leads/_local/lead";

export const getDatabaseLeadList = (): Promise<Lead[]> =>
  db.select().from(leadsTable)
