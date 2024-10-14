import {Lead} from "@/app/api/leads/_local/lead";
import {NetworkReturn} from "@/app/lib/data_or_error";

export type PostLead = Omit<Lead, 'id'>;

export const createNetworkLead = async (body: PostLead): Promise<NetworkReturn<Lead>> =>
  fetch(`http://localhost:3000/api/leads`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (r) => ({
    success: r.status < 300,
    json: await r.json(),
  }))
