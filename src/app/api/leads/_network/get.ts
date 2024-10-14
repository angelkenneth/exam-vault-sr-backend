import {Lead} from "@/app/api/leads/_local/lead";
import {NetworkReturn} from "@/app/lib/data_or_error";

export interface NetworkLeadById {
  leadId: number;
}

export const getNetworkLeadById = async (leadId: string): Promise<NetworkReturn<Lead>> => {
  return fetch(`http://localhost:3000/api/leads/${leadId}`, {
    method: 'GET',
  }).then(async (r) => ({
    success: r.status < 300,
    json: await r.json(),
  }))
}
