"use client";
import Link from 'next/link'
import {useGraphqlLeadList} from "@/app/api/leads/_network/list";

export default function ListLead() {
  const {loading, data} = useGraphqlLeadList()
  const leadList = data?.leads || []

  if (loading) {
    return <>...</>
  }
  return (
    <>
      <h1>List of Lead</h1>
      <p>
        <Link href="/leads_graphql/new">Create</Link>
      </p>
      <ul>
        {leadList.map((lead) => (
          <li key={lead.id}>
            <Link href={`/leads_graphql/${lead.id}`}>{lead.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
