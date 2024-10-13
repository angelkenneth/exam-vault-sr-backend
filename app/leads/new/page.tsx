"use client";
import {useForm} from "react-hook-form";
import {Lead} from "@/app/api/leads/_local/lead";
import {useRouter} from 'next/navigation'
import {PostLead} from "@/app/api/leads/_network/post";

const createLead = async (body: PostLead) => {
  return fetch(`http://localhost:3000/api/leads`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(r => r.json() as Promise<Lead>)
}

export default function CreateNewLead() {
  const {register, handleSubmit} = useForm<PostLead>();
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
