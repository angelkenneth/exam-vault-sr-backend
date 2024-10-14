"use client";
import {useEffect, useState} from "react";
import {Lead} from "@/app/api/leads/_local/lead";
import {getNetworkLeadById} from "@/app/api/leads/_network/get";
import type {ZodIssue} from "zod";

export default function LeadId({params}: { params: { leadId: string } }) {
  const leadId = params.leadId as string;
  const [lead, setLead] = useState<Lead | null>(null);
  const [error, setError] = useState<ZodIssue[]>([])

  useEffect(() => {
    getNetworkLeadById(leadId)
      .then(({success, json}) => {
        if (success) {
          setLead(json);
        } else {
          setError(json)
        }
      })
  }, [leadId]);

  if (error.length) {
    return (
      <>
        {error.map((e, index) => (
          <h1 key={index}>{e.message}</h1>
        ))}
      </>
    )
  }
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
