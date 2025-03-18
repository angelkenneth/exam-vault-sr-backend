import {Lead} from "@/lib/leads/local/lead";
import {useMutation} from '@tanstack/react-query';
import {reactQueryClient} from "@/app/lib/tanstack-client";
import {NetworkReturn} from "@/lib/shared/data_or_error";

export type PostLead = Omit<Lead, 'id'>;

export const createLeadNetwork = async (
  body: PostLead
): Promise<NetworkReturn<Lead>> =>
  fetch(`http://localhost:3000/api/leads`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (r) => ({
    success: r.status < 300,
    json: await r.json(),
  }));

export const useCreateLeadMutation = () =>
  useMutation({
    mutationFn: (input: PostLead) => createLeadNetwork(input),
    onMutate: async () => {
      await reactQueryClient.cancelQueries({queryKey: ['leads']});
    },
    onSuccess: async () => {
      await reactQueryClient.invalidateQueries({queryKey: ['leads']});
    },
  });
