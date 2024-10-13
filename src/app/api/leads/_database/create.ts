import {db} from "@/db";
import {leadsTable} from "@/db/schema";
import {PostLead} from "@/app/api/leads/_network/post";
import {Lead} from "@/app/api/leads/_local/lead";

export const createDatabaseLead = (body: PostLead): Promise<Lead> =>
  db.insert(leadsTable).values(body).returning().then(r => r[0])
