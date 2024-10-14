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
  const fieldErrorEl = (fieldName: string) => {
    const zodError = error.find(e => e.path[0] === fieldName)
    if (zodError) {
      return <div>({zodError.message})</div>
    }
  }

  return (
    <>
      <h1>New Lead</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name", {required: true})} />
          {fieldErrorEl("name")}
        </div>
        <div>
          <label>Age</label>
          <input type="number" {...register("age", {required: true})} />
          {fieldErrorEl("age")}
        </div>
        <div>
          <br/>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}
