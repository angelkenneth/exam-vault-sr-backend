"use client";
import Link from 'next/link'
import {useEffect, useState} from "react";
import {Lead} from "@/app/api/leads/_local/lead";
import {getNetworkLeadList} from "@/app/api/leads/_network/list";

export default function ListLead() {
  const [leadList, setLeadList] = useState<Lead[] | null>(null);

  useEffect(() => {
    getNetworkLeadList().then(lead => setLeadList(lead.items))
  }, []);

  if (!leadList) {
    return <>....</>
  }
  return (
    <>
      <h1>List of Lead</h1>
      <p>
        <Link href="/leads_rest/new">Create</Link>
      </p>
      <ul>
        {leadList.map((lead) => (
          <li key={lead.id}>
            <Link href={`/leads_rest/${lead.id}`}>{lead.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
