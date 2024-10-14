"use client";
import {useEffect, useState} from "react";
import {Lead} from "@/app/api/leads/_local/lead";
import {getNetworkLeadById} from "@/app/api/leads/_network/get";

export default function LeadId({params}: { params: { leadId: string } }) {
  const leadId = params.leadId as string;
  const [lead, setLead] = useState<Lead | null>(null);

  useEffect(() => {
    getNetworkLeadById(leadId).then(lead => setLead(lead))
  }, [leadId]);

  if (!lead) {
    return <>...</>
  }
  return (
    <>
      <h1>This is {leadId}!</h1>
      <pre>{JSON.stringify(lead, null, 2)}</pre>
    </>
  )
}
