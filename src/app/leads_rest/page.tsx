'use client';
import Link from 'next/link';
import { serviceDisplayMap } from '@/lib/leads/local/services';
import { useLeadListRestQuery } from '@/lib/leads/network-api/list';

export default function ListLead() {
  const { isLoading, data } = useLeadListRestQuery();
  const leadList = data || [];

  return (
    <>
      <h1>
        <Link href='/'>🏠</Link>
        &nbsp;&gt; List of Leads (REST)
      </h1>
      <p>
        <Link href='/leads_rest/new'>Create</Link>
      </p>
      {(() => {
        if (isLoading) {
          return <div>...</div>;
        }
        if (leadList.length === 0) {
          return <div>No leads found</div>;
        }

        return (
          <ul>
            {leadList.map((lead) => (
              <li key={lead.id}>
                <Link href={`/leads_rest/${lead.id}`}>
                  {lead.name} ({serviceDisplayMap[lead.service]})
                </Link>
              </li>
            ))}
          </ul>
        );
      })()}
    </>
  );
}
