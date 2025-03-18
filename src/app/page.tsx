"use client";

export default function Home() {
  return (
    <>
      <h1>Demo: NextJs GraphQL + REST</h1>
      <ul>
        <li>
          <a href='/leads_rest'>Leads (REST)</a>
        </li>
        <li>
          <a href='/leads_graphql'>Leads (GraphQL)</a>
        </li>
      </ul>
    </>
  )
}
