'use client';
import Link from 'next/link';
import { useLeadByIdRestQuery } from '@/lib/leads/network-api/get';

export default function LeadId({ params }: { params: { leadId: string } }) {
  const leadId = params.leadId as string;
  const { isLoading, data: lead } = useLeadByIdRestQuery(leadId);

  if (isLoading) {
    return <div>...</div>;
  }
  return (
    <>
      <h1>This is {leadId}!</h1>
      <pre>{JSON.stringify(lead, null, 2)}</pre>
      <p>
        <Link href='/leads_rest'>See other responses</Link>
      </p>
    </>
  );
}
