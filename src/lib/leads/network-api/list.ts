import {Lead} from "@/lib/leads/local/lead";
import {useQuery} from '@tanstack/react-query';
import {ListResponse} from "@/lib/shared/api";

export const networkLeadList = (): Promise<Lead[]> => {
  const url = new URL('http://localhost:3000');
  url.pathname = '/api/leads';
  const request = new Request(url, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
  });
  return fetch(request)
    .then((r) => r.json() as Promise<ListResponse<Lead>>)
    .then((r) => r.items);
};

export const useRestApiLeadList = () =>
  useQuery({
    queryKey: ['leads'],
    queryFn: () => networkLeadList(),
  });
