"use client";
import {useEffect, useState} from "react";
import {Lead} from "@/app/lib/leads";

const getLeadById = async (leadId: string) => {
  return fetch(`http://localhost:3000/api/leads/${leadId}`, {
    method: 'GET',
  }).then(r => r.json() as Promise<Lead>)
}

export default function LeadId({params}: { params: { leadId: string } }) {
  const leadId = params.leadId as string;
  const [lead, setLead] = useState<Lead | null>(null);

  useEffect(() => {
    getLeadById(leadId).then(lead => setLead(lead))
  }, [leadId]);

  if (!lead) {
    return <>...</>
  }
  return (
    <>
      <h1>This is {leadId}!</h1>
      <pre>{JSON.stringify(lead)}</pre>
    </>
  )
}
