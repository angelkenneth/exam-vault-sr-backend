"use client";
import {useGraphqlLeadById} from "@/app/api/leads/_network/get";

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
    </>
  )
}
