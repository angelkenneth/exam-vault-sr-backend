import {db} from "@/db";
import {leadsTable} from "@/db/schema";
import {PostLead} from "@/lib/leads/_network/post";
import {Lead} from "@/lib/leads/_local/lead";

export const createDatabaseLead = (body: PostLead): Promise<Lead> =>
  db.insert(leadsTable).values(body).returning().then(r => r[0])
