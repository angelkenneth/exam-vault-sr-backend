"use client";
import {useForm} from "react-hook-form";
import {Lead} from "@/app/api/leads/_local/lead";
import {useRouter} from 'next/navigation'
import {createNetworkLead, PostLead} from "@/app/api/leads/_network/post";

export default function CreateNewLead() {
  const {register, handleSubmit} = useForm<PostLead>();
  const router = useRouter()
  const onSubmit = (data: Lead) =>
    createNetworkLead(data)
      .then((lead) => router.push(`/leads/${lead.id}`));

  return (
    <>
      <h1>New Lead</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name", {required: true})} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}
