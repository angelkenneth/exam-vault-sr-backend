import Link from 'next/link'

export default function ListLead() {
  return (
    <>
      <h1>List of Lead</h1>
      <p>
        <Link href="/leads/new">Create</Link>
      </p>
    </>
  )
}
