import { Lead } from '@/lib/leads/local/lead';
import { useQuery } from '@tanstack/react-query';

export const leadByIdRestNetwork = (leadId: string): Promise<Lead> => {
  const url = new URL('http://localhost:3000');
  url.pathname = `/api/leads/${leadId}`;
  const request = new Request(url, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
  });
  return fetch(request).then((r) => r.json() as Promise<Lead>);
};

export const useLeadByIdRestQuery = (leadId: string) =>
  useQuery({
    queryKey: ['leads', leadId],
    queryFn: () => leadByIdRestNetwork(leadId),
  });
