"use client";
import Link from 'next/link'
import {useGraphqlLeadList} from "@/lib/leads/network/list";
import {serviceDisplayMap} from "@/lib/leads/local/services";

export default function ListLead() {
  const {loading, data} = useGraphqlLeadList()
  const leadList = data?.leads || []

  if (loading) {
    return <>...</>
  }
  return (
    <>
      <h1>List of Leads</h1>
      <p>
        <Link href="/">Create</Link>
      </p>
      <ul>
        {(() => {
          if (leadList.length) {
            return leadList.map((lead) => (
              <li key={lead.id}>
                <Link href={`/leads/${lead.id}`}>{lead.name} ({serviceDisplayMap[lead.service]})</Link>
              </li>
            ))
          } else {
            return <>No leads found.</>
          }
        })()}
      </ul>
    </>
  )
}
