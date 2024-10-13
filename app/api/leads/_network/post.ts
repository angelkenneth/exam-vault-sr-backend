import {Lead} from "@/app/api/leads/_local/lead";

export type PostLead = Exclude<Lead, 'id'>;
