import {Lead} from "@/app/api/leads/_local/lead";

export const getNetworkLeadById = async (leadId: string) => {
  return fetch(`http://localhost:3000/api/leads/${leadId}`, {
    method: 'GET',
  }).then(r => r.json() as Promise<Lead>)
}
