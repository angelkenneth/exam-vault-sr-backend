"use client";
import {useForm} from "react-hook-form";
import {useRouter} from 'next/navigation'
import {createNetworkLead, PostLead} from "@/app/api/leads/_network/post";
import {useState} from "react";
import type {ZodIssue} from "zod";

export default function CreateNewLead() {
  const {register, handleSubmit} = useForm<PostLead>();
  const [error, setError] = useState<ZodIssue[]>([])
  const router = useRouter()
  const onSubmit = (data: PostLead) => {
    setError([])
    return createNetworkLead(data)
      .then(({success, json}) => {
        if (success) {
          router.push(`/leads/${json.id}`);
        } else {
          setError(json)
        }
      });
  };

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
        {(() => {
          if (error.length) {
            return <pre>{JSON.stringify(error, null, 2)}</pre>
          }
        })()}
      </form>
    </>
  )
}
