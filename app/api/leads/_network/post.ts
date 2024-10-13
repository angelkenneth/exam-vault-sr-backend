import {Lead} from "@/app/api/leads/_local/lead";

export type PostLead = Exclude<Lead, 'id'>;

export const createNetworkLead = async (body: PostLead) => {
  return fetch(`http://localhost:3000/api/leads`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(r => r.json() as Promise<Lead>)
}
