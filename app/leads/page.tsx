"use client";
import Link from 'next/link'
import {useEffect, useState} from "react";
import {ListResponse} from "@/app/lib/api";
import {Lead} from "@/app/lib/leads";

const getLeadList = async () => {
  return fetch('http://localhost:3000/api/leads', {
    method: 'GET',
  }).then(r => r.json() as Promise<ListResponse<Lead>>)
}

export default function ListLead() {
  const [leadList, setLeadList] = useState<Lead[] | null>(null);

  useEffect(() => {
    getLeadList().then(lead => setLeadList(lead.items))
  }, []);

  if (!leadList) {
    return <>....</>
  }
  return (
    <>
      <h1>List of Lead</h1>
      <p>
        <Link href="/leads/new">Create</Link>
      </p>
      <ul>
        {leadList.map((lead) => (
          <li key={lead.id}>
            <Link href={`/leads/${lead.id}`}>{lead.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
