"use client";
import Link from 'next/link'
import {useLeadListGraphqlQuery} from "@/lib/leads/network-graphql/list";
import {serviceDisplayMap} from "@/lib/leads/local/services";

export default function ListLead() {
  const {loading, data} = useLeadListGraphqlQuery()
  const leadList = data?.leads || []

  return (
    <>
      <h1>
        <Link href="/">🏠</Link>
        &nbsp;&gt;
        List of Leads (GraphQL)
      </h1>
      <p>
        <Link href="/leads_graphql/new">Create</Link>
      </p>
      {(() => {
        if (loading) {
          return <div>...</div>
        }
        if (leadList.length === 0) {
          return <div>No leads found</div>
        }

        return <ul>
          {leadList.map((lead) => (
            <li key={lead.id}>
              <Link href={`/leads_graphql/${lead.id}`}>{lead.name} ({serviceDisplayMap[lead.service]})</Link>
            </li>
          ))}
        </ul>
      })()}
    </>
  )
}
