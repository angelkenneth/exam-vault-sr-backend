"use client";
import Link from 'next/link'
import {useGraphqlLeadList} from "@/lib/leads/_network/list";

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
                <Link href={`/leads/${lead.id}`}>{lead.name}</Link>
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
