"use client";
import {useParams} from "next/navigation";

export default function LeadId() {
  const params = useParams()
  const leadId = params.leadId as string;
  return (
    <>
      <h1>This is {leadId}!</h1>
    </>
  )
}
