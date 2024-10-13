import {ListResponse} from "@/app/lib/api";
import {Lead} from "@/app/api/leads/_local/lead";

export const getNetworkLeadList = async () =>
  fetch('http://localhost:3000/api/leads', {
    method: 'GET',
  }).then(r => r.json() as Promise<ListResponse<Lead>>)
