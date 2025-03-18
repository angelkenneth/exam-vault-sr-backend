'use client';
import { useLeadByIdGraphqlQuery } from '@/lib/leads/network-graphql/get';
import Link from 'next/link';

export default function LeadId({ params }: { params: { leadId: string } }) {
  const leadId = params.leadId as string;
  const { loading, data } = useLeadByIdGraphqlQuery(leadId);
  const lead = data?.leadById;

  if (loading) {
    return <>...</>;
  }
  return (
    <>
      <h1>This is {leadId}!</h1>
      <pre>{JSON.stringify(lead, null, 2)}</pre>
      <p>
        <Link href='/leads_graphql'>See other responses</Link>
      </p>
    </>
  );
}
