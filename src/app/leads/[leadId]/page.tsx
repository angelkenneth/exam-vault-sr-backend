"use client";
import {useGraphqlLeadById} from "@/lib/leads/_network/get";
import Link from "next/link";

export default function LeadId({params}: { params: { leadId: string } }) {
  const leadId = params.leadId as string;
  const {loading, data} = useGraphqlLeadById(leadId);
  const lead = data?.leadById;

  if (loading) {
    return <>...</>
  }
  return (
    <>
      <h1>This is {leadId}!</h1>
      <pre>{JSON.stringify(lead, null, 2)}</pre>
      <p>
        <Link href="/leads">See other responses</Link>
      </p>
    </>
  )
}
