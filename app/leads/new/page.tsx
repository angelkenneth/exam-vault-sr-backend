"use client";
import {useForm} from "react-hook-form";
import {CreatableLead, Lead} from "@/app/lib/leads";
import {useRouter} from 'next/navigation'

const createLead = async (body: CreatableLead) => {
  return fetch(`http://localhost:3000/api/leads`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(r => r.json() as Promise<Lead>)
}

export default function CreateNewLead() {
  const {register, handleSubmit} = useForm<CreatableLead>();
  const router = useRouter()
  const onSubmit = (data: Lead) =>
    createLead(data)
      .then((lead) => router.push(`/leads/${lead.id}`));

  return (
    <>
      <h1>New Lead</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register("name", {required: true})} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
